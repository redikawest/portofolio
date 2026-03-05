import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Redika Westama Putra — Fullstack Web Engineer",
  description:
    "Fullstack Web Engineer specializing in Laravel, Next.js, TypeScript, PostgreSQL, and AWS. Building scalable, high-performance web applications.",
  keywords: [
    "Redika Westama Putra",
    "Fullstack Developer",
    "Laravel",
    "Next.js",
    "TypeScript",
    "Web Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Redika Westama Putra" }],
  creator: "Redika Westama Putra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://redika.dev",
    title: "Redika Westama Putra — Fullstack Web Engineer",
    description:
      "Fullstack Web Engineer specializing in Laravel, Next.js, TypeScript, PostgreSQL, and AWS.",
    siteName: "Redika Westama Putra",
  },
  twitter: {
    card: "summary_large_image",
    title: "Redika Westama Putra — Fullstack Web Engineer",
    description:
      "Fullstack Web Engineer specializing in Laravel, Next.js, TypeScript, PostgreSQL, and AWS.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
