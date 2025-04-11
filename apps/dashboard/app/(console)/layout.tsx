import ConsoleNav from "@/components/console-nav";

export default function ConsoleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-full flex flex-col">
      <ConsoleNav />
      <div className="flex-1">{children}</div>
    </div>
  );
}
