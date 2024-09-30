import Menu from "./menu-bar";

export function Leftbar() {
  return (
    <aside className="md:flex hidden flex-[1] min-w-[238px] sticky top-16 flex-col h-[94.5vh] overflow-y-auto">
      <div className="py-4">
        <Menu />
      </div>
    </aside>
  );
}

