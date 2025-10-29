import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import LayoutClientWrapper from "@/components/LayoutClientWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "A-Fix Car Maintenance | 24x7 Car Repair & Towing Service in Nasim, Riyadh",
  description:
    "A-Fix Car Maintenance provides professional car repair, painting, electrical works, and 24x7 emergency towing service in Nasim, Riyadh. Reliable auto care for all brands.",
  keywords: [
    "A-Fix Car Maintenance",
    "car mechanic Riyadh",
    "auto repair Nasim",
    "24x7 car towing Riyadh",
    "car service center Riyadh",
    "car denting and painting Nasim",
    "electrical car works Riyadh",
    "emergency roadside assistance Riyadh",
    "car maintenance in Nasim Riyadh",
    "A-Fix auto service Riyadh",
  ],
  alternates: {
    canonical: "https://afixcars.com",
  },
  openGraph: {
    title:
      "A-Fix Car Maintenance | 24x7 Auto Repair & Towing in Nasim, Riyadh",
    description:
      "Professional car repair, electrical works, denting, painting, and emergency towing services in Nasim, Riyadh. Trusted auto experts available 24/7.",
    url: "https://afixcars.com",
    siteName: "A-Fix Car Maintenance",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "A-Fix Car Maintenance Workshop in Nasim Riyadh",
      },
    ],
    locale: "en_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@afixcars",
    title:
      "A-Fix Car Maintenance | Expert Car Service & Towing in Nasim, Riyadh",
    description:
      "Your trusted car service partner in Nasim, Riyadh — from general maintenance to emergency towing, A-Fix keeps your car running smoothly 24x7.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/logo.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <LayoutClientWrapper>{children}</LayoutClientWrapper>
      </body>
      </html>
  );
}