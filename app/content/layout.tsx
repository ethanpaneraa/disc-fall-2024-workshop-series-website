import { Leftbar } from "@/components/Leftbar";

export default function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('content layout')
  return (
    <div className="flex items-start gap-10">
      <Leftbar key="leftbar" />
      <div className="flex-[4]">{children}</div>{" "}
    </div>
  );
}
