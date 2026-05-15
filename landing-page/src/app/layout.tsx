import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MRDU Bus Pass — Online Student Bus Pass Management System",
  description: "Online bus pass portal for MRDU. Register, make payments, and view your unique bus pass number. Educational project only. Contact: nishithmareddy@gmail.com",
  keywords: ["MRDU", "bus pass", "student transport", "Hyderabad", "online bus pass", "educational project"],
  openGraph: {
    title: "MRDU Bus Pass — Online Student Bus Pass System",
    description: "Register online, pay securely, and get your unique bus pass number for MRDU transport services. Educational project only.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
