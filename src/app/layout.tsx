import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HOMEi for Landlords & Estate Agents | Smarter Property Management",
  description:
    "HOMEi helps landlords and estate agents reduce inspection costs, streamline tenant communication, and manage properties effortlessly from one platform.",
  keywords: [
    "property management",
    "landlord software",
    "estate agent tools",
    "tenant communication",
    "property inspections",
    "HOMEi",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
