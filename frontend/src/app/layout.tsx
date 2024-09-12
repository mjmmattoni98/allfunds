import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Inter as FontSans } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

config.autoAddCss = false;

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <main>
          <Suspense>
            {children}
            <Toaster />
          </Suspense>
        </main>
      </body>
    </html>
  );
}
