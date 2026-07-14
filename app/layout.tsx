import type { Metadata, Viewport } from "next";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CustomCursor from "@/components/custom-cursor";
import { generateOrganizationSchema } from "@/lib/seo";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e3a5f",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.accounstone.com"),

  title: {
    default: "Accounstone | Outsourced Accounting & Finance Solutions",
    template: "%s | Accounstone",
  },

  description:
    "Professional outsourced accounting, finance, and HR services for growing businesses. Expert CPAs and trusted partnerships.",

  keywords: [
    "accounting services",
    "outsourced accounting",
    "CFO services",
    "bookkeeping",
    "tax advisory",
    "finance outsourcing",
    "HR services",
  ],

  authors: [{ name: "Accounstone" }],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.accounstone.com",
    siteName: "Accounstone",
    title: "Accounstone | Outsourced Accounting & Finance Solutions",
    description: "Professional outsourced accounting, finance, and HR services for growing businesses.",
    images: [
      {
        url: "https://www.accounstone.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Accounstone",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Accounstone | Outsourced Accounting & Finance Solutions",
    description: "Professional outsourced accounting, finance, and HR services for growing businesses.",
    creator: "@accounstone",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="text-foreground">
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
