import { Leftbar } from "@/components/Leftbar";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start gap-10">
      <Leftbar key="left" />
      <div className="flex-[4]">{children}</div>{" "}
    </div>
  );
}
