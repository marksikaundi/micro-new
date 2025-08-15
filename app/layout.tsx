import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./convex-client-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Inc. Magazine - Business News, Leadership & Entrepreneurship",
  description: "The essential news and insights for entrepreneurs building the companies of tomorrow. Get the latest business insights, leadership advice, and startup stories.",
  keywords: "business, entrepreneurship, startups, leadership, innovation, technology, growth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
