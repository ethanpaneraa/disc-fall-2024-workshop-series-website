export type EachRoute = {
  title: string;
  href: string;
  basePath?: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    basePath: "content",
    items: [{ title: "Introduction", href: "/introduction" }],
  },
  {
    title: "Workshops",
    href: "/workshops",
    noLink: true,
    basePath: "content",
    items: [
      { title: "Workshop 1", href: "/workshop-1" },
      { title: "Workshop 2", href: "/workshop-2" },
      { title: "Workshop 3", href: "/workshop-3" },
      { title: "Workshop 4", href: "/workshop-4" },
      { title: "Workshop 5", href: "/workshop-5" },
    ],
  },
  {
    title: "Assignments",
    href: "/assignments",
    noLink: true,
    basePath: "content",
    items: [
      { title: "Project Overview", href: "/project-overview" },
      { title: "Assignment 1", href: "/assignment-1" },
      { title: "Assignment 2", href: "/assignment-2" },
      { title: "Assignment 3", href: "/assignment-3" },
      { title: "Assignment 4", href: "/assignment-4" },

    ],
  },
];

type Page = { title: string; href: string; basePath?: string };

function getRecursiveAllLinks(
  node: EachRoute,
  parentHref: string = ""
): Page[] {
  const ans: Page[] = [];
  const fullHref = `${parentHref}${node.href}`;

  if (!node.noLink) {
    ans.push({ title: node.title, href: fullHref, basePath: node.basePath });
  }

  node.items?.forEach((subNode) => {
    ans.push(...getRecursiveAllLinks(subNode, fullHref));
  });

  return ans;
}

export const page_routes = ROUTES.flatMap((route) =>
  getRecursiveAllLinks(route)
);
