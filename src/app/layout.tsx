import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Will Sparrow",
  description: "Production Coordinator  •  Creative + Technical",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          
          <div
            className="
              min-h-screen
              bg-white text-zinc-900
              dark:bg-gradient-to-b dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950
              dark:text-zinc-100
            "
          >
            <Navbar />
            {children}
          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}
