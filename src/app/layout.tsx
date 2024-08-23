import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stripe Supabase Tutorial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex items-center justify-center gap-10 p-2">
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/subscribed">Subscribed</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}
