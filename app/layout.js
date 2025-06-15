import { Geist, Geist_Mono, Comme, Encode_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const comme = Comme({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

const encodeSans = Encode_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // choose weights you need
  display: 'swap',
});

export const metadata = {
  title: "E-Commerce App",
  description: "Developed by @nehabisht",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${comme.className} ${encodeSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
