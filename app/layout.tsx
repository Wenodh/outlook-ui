import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "../utils/cn";
import Navbar from "@/components/Navbar";
import FixedSidebar from "@/components/FixedSidebar";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Outlook-UI",
  description: "Outlook Dummy Ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn("flex flex-col h-full min-h-screen", inter.className)}
      >
        <Navbar />
        <div className="flex h-full w-full bg-gray-200/80">
          <FixedSidebar />
          <section className="flex flex-col w-full">
            <Header />
            <div className="flex h-full p-2">
              <Sidebar />
              <main className="h-full w-full">{children}</main>
            </div>
          </section>
        </div>
      </body>
    </html>
  );
}
