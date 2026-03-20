export default function PropertiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full bg-transparent mx-auto mt-0">
      {/* We assume the global layout might have navbar, or we render our own specific things here */}
      <div className="w-full relative">
        {children}
      </div>
    </div>
  );
}
