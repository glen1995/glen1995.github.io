import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Ola",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            {/* Navigation items */}
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          {/* Footer content */}
        </footer>
      </body>
    </html>
  );
}
