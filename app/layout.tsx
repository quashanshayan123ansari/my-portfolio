import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Mohammad Quashan Ansari | Quantitative Finance & Mathematics",
  description: "Portfolio of Mohammad Quashan Ansari, Banaras Hindu University BS Mathematics. Specializing in Financial Mathematics, Quantitative Finance, Options Pricing, and Risk Parity Research.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={cn("font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}
