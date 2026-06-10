import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.accounstone.com"),

  title: {
    default:
      "Accounstone | Offshore Accounting & Staffing Solutions",
    template: "%s | Accounstone",
  },

  description:
    "Offshore Accounting & Staffing Solutions for CPA Firms, Accounting Practices and Businesses.",
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