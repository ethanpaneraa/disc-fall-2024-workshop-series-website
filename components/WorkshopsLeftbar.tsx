import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo, NavMenu } from "./navbar";
import { Button } from "./ui/button";
import { AlignLeftIcon } from "lucide-react";
import { DialogTitle } from "./ui/dialog";
import WorkshopsMenu from "@/components/workshops-menu-bar";

export function WorkshopsLeftBar() {
  return (
    <aside className="md:flex hidden flex-[1] min-w-[238px] sticky top-16 flex-col h-[94.5vh] overflow-y-auto">
      <div className="py-4">
        <WorkshopsMenu />
      </div>
    </aside>
  );
}

export function SheetLeftBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden flex">
          <AlignLeftIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4 px-0" side="left">
        <DialogTitle className="sr-only">Menu</DialogTitle>
        <SheetHeader>
          <SheetClose className="px-5" asChild>
            <Logo />
          </SheetClose>
        </SheetHeader>
        <div className="flex flex-col gap-4 overflow-y-auto">
          <div className="flex flex-col gap-2.5 mt-3 mx-2 px-5">
            <NavMenu isSheet />
          </div>
          <div className="mx-2 px-5">
            <WorkshopsMenu isSheet />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
