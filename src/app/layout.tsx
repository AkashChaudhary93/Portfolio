import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akash Chaudhary | Full-Stack Developer • Cloud Engineer • Problem Solver",
  description:
    "Portfolio of Akash Chaudhary — Building full-stack web applications with React & Spring Boot, architecting cloud infrastructure on AWS, and solving 250+ DSA problems. B.Tech CSE student at Lovely Professional University, Punjab.",
  keywords: [
    "Akash Chaudhary",
    "Full-Stack Developer",
    "Cloud Engineer",
    "React Developer",
    "Spring Boot",
    "AWS",
    "DSA",
    "LPU",
    "Portfolio",
  ],
  authors: [{ name: "Akash Chaudhary" }],
  openGraph: {
    title: "Akash Chaudhary | Full-Stack Developer • Cloud Engineer • Problem Solver",
    description:
      "Building full-stack web applications with React & Spring Boot, architecting serverless cloud solutions on AWS, and solving 250+ DSA problems.",
    url: "https://akashchaudhary.dev",
    siteName: "Akash Chaudhary Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Chaudhary | Full-Stack Developer • Cloud Engineer • Problem Solver",
    description:
      "Building full-stack web applications with React & Spring Boot, architecting serverless cloud solutions on AWS, and solving 250+ DSA problems.",
  },
  other: {
    "theme-color": "#0A0A0F",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${inter.variable}`}>
      <body>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
