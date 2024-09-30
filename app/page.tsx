import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <Link
        href=""
        target="_blank"
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4"
      >
        Follow our Mini Lectures{" "}
        <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="text-xl font-bold mb-4 sm:text-6xl">
        Develop & Innovate for Social Change Fall 2024 Workshop Series
      </h1>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
        This is a workshop series that will introduce you to the essentials of
        all things modern web development. In this workshop series, you will
        learn how to build a modern web application from scratch using the
        latest technologies and best practices.
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/course${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Stared
        </Link>
        <Link
          href="https://discord.gg/mqRQ7s9CyS"
          className={buttonVariants({
            variant: "outline",
            className: "px-6",
            size: "lg",
          })}
        >
          Join DISC
        </Link>
      </div>
    </div>
  );
}
