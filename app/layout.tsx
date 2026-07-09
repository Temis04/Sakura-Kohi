import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { CartProvider } from "@/lib/cart-context";
import { CustomizeProvider } from "@/lib/customize-context";
import CustomizeDrawer from "@/components/CustomizeDrawer";
import CartDrawer from "@/components/CartDrawer";

export const metadata: Metadata = {
  title: "Sakura Kohi — A quiet cup, poured well",
  description:
    "Sakura Kohi is a minimal, Japanese-inspired coffee counter in the UK. Single-origin espresso, seasonal sakura drinks, and a calm place to sit.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className="font-body text-bone grain antialiased"
      >
        <CartProvider>
          <CustomizeProvider>
            <Nav />
            <main>{children}</main>
            <Footer />
            <CustomizeDrawer />
            <CartDrawer />
          </CustomizeProvider>
        </CartProvider>
      </body>
    </html>
  );
}
