import type { Metadata } from "next";

import "./globals.css";

import localFont from "next/font/local"
import { ThemeProvider } from "@/components/providers/ThemeProvider";

import Image from "next/image";
import Link from "next/link";

const iansuiFont = localFont({src: '../../public/font/Iansui-Regular.ttf'})

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://thevale.top"),
  title: "山谷｜The Vale",
  description: "匿名抒發心聲的平台。分享低語，傾聽靜谷心聲與星光回聲，尋找共鳴與溫暖。",
  openGraph: {
    title: "山谷｜The Vale",
    description: "匿名抒發心聲的平台。分享低語，傾聽靜谷心聲與星光回聲，尋找共鳴與溫暖。",
    url: "https://thevale.top",
    siteName: "山谷｜The Vale",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className={`${iansuiFont.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="relative">
            <div className="absolute top-4 left-4 md:top-8 md:left-16 z-2">
              <Link href="/">
                <Image
                  src="/icon/vale.svg"
                  alt="The Vale logo"
                  width={80}
                  height={80}
                  className="rounded-full invert-75"
                  priority
                />
              </Link>
            </div>
          </div>
          {children}
          <hr />
          <Footer className="w-full py-16 px-8" />
        </ThemeProvider>
      </body>
    </html>
  );
}
