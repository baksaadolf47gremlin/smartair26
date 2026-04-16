import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SMARTAIR - Klíma, hőszivattyú, hűtés-fűtés",
  description: "SMARTAIR: profi klíma és hőszivattyú megoldások. Tervezés, szerelés, karbantartás otthonra és cégeknek – megbízhatóan, szakértelemmel.",
};

import { FramerProvider } from "@/components/FramerProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hu"
      className={`${inter.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col">
        <FramerProvider>
          {children}
        </FramerProvider>
      </body>
    </html>
  );
}
