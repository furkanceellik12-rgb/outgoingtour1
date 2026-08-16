import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "OUTGOING TOUR | Premium B2B Travel Partner",
  description: "Premium B2B travel, MICE and VIP solutions across Turkey, Europe, Dubai and worldwide destinations."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body><Header />{children}<Footer /></body>
    </html>
  );
}