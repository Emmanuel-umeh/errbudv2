import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ChakraUIProvider from "@/providers/ChakraProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Heading font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
export const metadata: Metadata = {
  title: "Errbud",
  description:
    "Need a cleaner? Errbud helps you find trusted, verified cleaners near you, easy booking, flexible service.",

    openGraph: {
    title: "Errbud",
    description:
      "Need a cleaner? Errbud helps you find trusted, verified cleaners near you, easy booking, flexible service.",
    url: "https://errbud.com",
    siteName: "Errbud",
    images: [
      {
        url: "https://errbud.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Errbud Find trusted cleaners near you",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Errbud",
    description:
      "Need a cleaner? Errbud helps you find trusted, verified cleaners near you, easy booking, flexible service.",
    images: ["https://errbud.com/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <ChakraUIProvider>{children}</ChakraUIProvider>
      </body>
    </html>
  );
}
