import { EachRoute } from "@/lib/routes-config";
import Anchor from "./anchor";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function SubLink({
  title,
  href,
  items,
  noLink,
  level,
  isSheet,
  basePath,
}: EachRoute & { level: number; isSheet: boolean }) {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(level == 0);

  const fullHref = basePath ? `/${basePath}${href}` : href;

  useEffect(() => {
    if (path !== fullHref && path.includes(fullHref)) setIsOpen(true);
  }, [fullHref, path]);

  useEffect(() => {
    console.log(`SubLink ${title} isOpen:`, isOpen);
  }, [isOpen, title]);

  const Comp = (
    <Anchor activeClassName="text-primary font-medium" href={fullHref}>
      {title}
    </Anchor>
  );

  const titleOrLink = !noLink ? (
    isSheet ? (
      <SheetClose asChild>{Comp}</SheetClose>
    ) : (
      Comp
    )
  ) : (
    <h4 className="font-medium sm:text-sm text-primary">{title}</h4>
  );

  if (!items) {
    return <div className="flex flex-col">{titleOrLink}</div>;
  }

  return (
    <div className="flex flex-col gap-1 w-full overflow-hidden">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center gap-2">
          {titleOrLink}
          <CollapsibleTrigger asChild>
            <Button
              className="ml-auto mr-3.5 h-6 w-6"
              variant="link"
              size="icon"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRight className="h-[0.9rem] w-[0.9rem]" />
              </motion.div>
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent forceMount>
          <AnimatePresence initial={false}>
            <motion.div
              key="content"
              initial="collapsed"
              animate={isOpen ? "open" : "collapsed"}
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{
                duration: 0.5,
                ease: [0.04, 0.62, 0.23, 0.98],
              }}
              style={{ overflow: "hidden" }}
            >
              <div
                className={cn(
                  "flex flex-col items-start sm:text-sm dark:text-stone-300/85 text-stone-800 ml-0.5 mt-2.5 gap-3",
                  level > 0 && "pl-4 border-l ml-1"
                )}
              >
                {items?.map((innerLink) => {
                  const modifiedItems = {
                    ...innerLink,
                    href: `${href}${innerLink.href}`,
                    level: level + 1,
                    isSheet,
                    basePath,
                  };
                  return (
                    <SubLink key={modifiedItems.href} {...modifiedItems} />
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
