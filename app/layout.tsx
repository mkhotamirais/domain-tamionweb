import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/home/header";
import Footer from "@/components/home/footer";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { MainClient } from "@/components/main-client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tamionweb",
  description: "Tamionweb is reliable Website Development Services, Customized to Meet Your Specific Needs and Goals.",
  keywords: [
    "mkhotami rais",
    "m khotami rais",
    "khotami",
    "tamionweb",
    "tamionweb services",
    "tamionweb development",
    "tamionweb website",
    "tamionweb website development",
    "tamionweb website development services",
    "tamionweb website development company",
  ],
  authors: [{ name: "MKhotami Rais" }],
  creator: "Mkhotami Rais",
  publisher: "Mkhotami Rais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <MainClient>
            <div className="-z-10 absolute size-64 rounded-full left-12 sm:left-28 top-8 bg-blue-600/10 blur-2xl" />
            <div className="-z-10 absolute size-48 rounded-full right-12 sm:right-24 top-72 bg-blue-600/15 blur-3xl" />
            {children}
          </MainClient>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
