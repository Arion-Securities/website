import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arion - Simplified assets backed. Powerful finance.",
  description: "Apply in 10 min for online assets backed finance OS that transforms how you operate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#FBFCFD]">
        {children}
      </body>
    </html>
  );
}
