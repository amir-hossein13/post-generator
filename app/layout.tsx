import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/template/navbar/Navbar";
import Footer from "@/components/template/footer/Footer";
import Container from "@/components/ui/Container";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Post Script Generator – AI-Powered LinkedIn & Instagram Posts",
  description:
    "Generate high-quality LinkedIn and Instagram posts instantly with AI. Save time and boost engagement on social media.",
  keywords: [
    "AI social media generator",
    "LinkedIn posts AI",
    "Instagram captions AI",
    "AI content creator",
    "Post Script Generator",
  ],
  authors: [{ name: "amirhossein" }],
  openGraph: {
    title: "Post Script Generator – AI-Powered LinkedIn & Instagram Posts",
    description:
      "Generate professional LinkedIn posts and engaging Instagram captions instantly with AI. Boost your social media presence effortlessly.",
    siteName: "Post Script Generator",
    images: [
      {
        url: "/img/hero-banner.png",
        width: 1200,
        height: 630,
        alt: "Post Script Generator Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Container>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
