import { WorkshopsLeftBar } from "@/components/WorkshopsLeftbar";

export default function WorkshopsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start gap-10">
      <WorkshopsLeftBar key="left" />
      <div className="flex-[4]">{children}</div>{" "}
    </div>
  );
}
