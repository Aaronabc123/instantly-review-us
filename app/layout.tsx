import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import {
  ClerkProvider,
  SignIn,
} from '@clerk/nextjs'
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Google reviews",
  description: "Make it easy to submit reviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider
        signInForceRedirectUrl="/dashboard"
        signUpForceRedirectUrl="/dashboard"
        afterSignOutUrl="/"
        >
          <html lang="en">
            <body>
              <Header />
              {children}
              <Footer />
            </body>
          </html>
        </ClerkProvider>
      </body>
    </html>
  );
}
