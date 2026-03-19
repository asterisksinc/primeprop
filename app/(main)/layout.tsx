import PrimePropNavbar from "../components/PrimePropNavbar";
import PrimePropHeader from "../components/PrimePropHeader";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PrimePropNavbar />
        <PrimePropHeader />
        {children}
      </body>
    </html>
  );
}