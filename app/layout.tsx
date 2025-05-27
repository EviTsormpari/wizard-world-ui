import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Wizard World",
  description: "Search houses in Wizard World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
