import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "+Tech",
  description: "+Tech um novo capítulo para o seu negócio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body  className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
