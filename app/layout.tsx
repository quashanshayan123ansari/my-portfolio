import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
