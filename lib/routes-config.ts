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
    title: "Assingments",
    href: "/assignments",
    noLink: true,
    basePath: "content",
    items: [{ title: "Assignment 1", href: "/assignment-1" }],
  },
  {
    title: "Workshops",
    href: "/workshops",
    noLink: true,
    basePath: "content",
    items: [{ title: "Workshop 1", href: "/workshop-1" }],
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
