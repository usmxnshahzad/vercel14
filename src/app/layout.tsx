import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next auth",
  description: "Next auth with clerk and mongodb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
    >
      <html lang="en">
        <body className={inter.className}>
          <ClerkLoading>
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-2xl font-bold text-gray-800">Loading...</div>
            </div>
          </ClerkLoading>
          <ClerkLoaded>
            <Header />
            {children}
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
