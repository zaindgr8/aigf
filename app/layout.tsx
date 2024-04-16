import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import "@/app/globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";
import StarsBackground from "@/canvas/StarsBackground";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ai Love: Virtual Girlfriend",
  description:
    "Space Portfolio of Mateusz Muszarski built in Next.jsWith Ai Love, every desire is fulfilled, every fantasy is realized, and every moment is an electrifying journey into ecstasy. Enter a world where pleasure knows no bounds, and let your wildest dreams take flight with your virtual paramour by your side.",
  keywords: [
    "Virtual Girlfriend",
    "Intimacy",
    "Seduction",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/2.png" />
      </head>
      <body
        className={cn(
          "min-h-screen text-foreground bg-background font-sans antialiased overflow-x-hidden",
          fontSans.variable
        )}
      >
        <NavBar />
        <StarsBackground />

        {children}
      </body>
    </html>
  );
}
