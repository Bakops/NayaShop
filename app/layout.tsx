import type { Metadata } from "next";
import type React from "react";

import { Toaster } from "@/components/toaster";
import { CartProvider } from "@/lib/cart-context";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "NayaShop - Marketplace Afro-Caribéenne",
  description:
    "Découvrez et vendez des produits authentiques afro-caribéens : mode, beauté, artisanat et plus encore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="font-poppins">
        <CartProvider>
          <Suspense fallback={null}>{children}</Suspense>
          <Toaster />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  );
}
