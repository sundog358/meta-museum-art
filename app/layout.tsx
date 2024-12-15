import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./components/Header";
import Footer from "@/components/Footer";

// Load Roboto font
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Meta Museum Art",
  description: "Explore cultural heritage through connected data.",
  openGraph: {
    title: "Meta Museum Art",
    description: "Explore cultural heritage through connected data.",
    images: [
      {
        url: "images/metawikiart3.png",
        width: 600,
        height: 450,
        alt: "Meta Museum Art Illustration",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Museum Art",
    description: "Explore cultural heritage through connected data.",
    images: ["images/metawikiart3.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} flex flex-col min-h-screen bg-background text-foreground font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
