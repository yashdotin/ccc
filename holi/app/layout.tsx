import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { RomanticCursorGlow } from "../components/RomanticCursorGlow";
import { PageTransition } from "../components/PageTransition";
import { MusicPlayer } from "../components/MusicPlayer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "For Shraddha ❤️",
  description: "A romantic, animated website dedicated to Shraddha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gradient-soft min-h-screen relative overflow-x-hidden ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MusicPlayer song="/mere-naam-tu.mp3" />
        <RomanticCursorGlow />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
