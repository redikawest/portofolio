import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://redikawest-portofolio.vercel.app"),
  title: "Redika Westama Putra — Fullstack Web Engineer",
  description:
    "Fullstack Web Engineer specializing in Laravel, Next.js, TypeScript, PostgreSQL, and MySQL. Building scalable, high-performance web applications.",
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
      "Fullstack Web Engineer specializing in Laravel, Next.js, TypeScript, PostgreSQL, and MySQL.",
    siteName: "Redika Westama Putra",
  },
  twitter: {
    card: "summary_large_image",
    title: "Redika Westama Putra — Fullstack Web Engineer",
    description:
      "Fullstack Web Engineer specializing in Laravel, Next.js, TypeScript, PostgreSQL, and MySQL.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Redika Westama Putra",
  url: "https://redikawest-portofolio.vercel.app",
  jobTitle: "Fullstack Web Engineer",
  email: "redikawest@gmail.com",
  image: "https://redikawest-portofolio.vercel.app/profile.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bali",
    addressCountry: "ID",
  },
  sameAs: [
    "https://github.com/redikawest",
    "https://linkedin.com/in/redikawest",
  ],
  knowsAbout: [
    "Laravel",
    "Next.js",
    "React.js",
    "TypeScript",
    "PHP",
    "PostgreSQL",
    "MySQL",
    "Node.js",
    "Express.js",
    "Docker",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
