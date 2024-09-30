import { getTocs } from "@/lib/markdown";
import TocObserver from "./toc-observer";

type TocProps = {
  path: string;
  type: "docs" | "workshops";
};

export default async function Toc({ path, type }: TocProps) {
  const tocs = await getTocs(path, type);

  if (tocs.length === 0) {
    return null;
  }

  return (
    <div className="lg:flex hidden toc flex-[1] min-w-[238px] py-8 sticky top-16 h-[95.95vh]">
      <div className="flex flex-col gap-3 w-full pl-2">
        <h3 className="font-medium text-sm">On this page</h3>
        <div className="pb-2 pt-0.5 overflow-y-auto">
          <TocObserver data={tocs} />
        </div>
      </div>
    </div>
  );
}
