import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  IBM_Plex_Mono,
  Konkhmer_Sleokchher,
  Roboto_Mono,
} from "next/font/google";
import "./globals.css";
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/shared/components/ui/sidebar";
import { AppSidebar } from "@/shared/components/app-sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const konkhmerSleokchher = Konkhmer_Sleokchher({
  variable: "--font-konkhmer-sleokchher",
  subsets: ["khmer", "latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Look!",
  description: "Take a look at my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ibmPlexMono.variable} ${konkhmerSleokchher.variable} ${robotoMono.variable} antialiased`}
      >
        <SidebarProvider className="bg-sidebar">
          {children}
          <SidebarTrigger className="mt-4 mr-auto size-10 rotate-180" />
          <AppSidebar />
        </SidebarProvider>
      </body>
    </html>
  );
}
