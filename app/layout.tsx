import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Accounstone",
  description:
    "Offshore Accounting & Staffing Solutions for CPA Firms, Accounting Practices and Businesses in the USA, UK and Australia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}