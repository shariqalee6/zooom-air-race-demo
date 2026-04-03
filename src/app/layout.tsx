import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zooom Air Race Demo",
  description: "Interactive map and list view for air race events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
