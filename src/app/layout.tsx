import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Top Gear",
  description: "Discover best japanese cars on our website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
