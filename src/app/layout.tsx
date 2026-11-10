import type { Metadata } from "next";
import "./globals.css";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import CtaModal from "@/components/CtaModal";

export const metadata: Metadata = {
  title: "Orbiverse — Performance-Led Growth Agency | We Bring Marketing Into Orbit",
  description: "Brand, demand and data, run by one team that answers to one number. Orbiverse turns drift into orbit for high-growth businesses.",
  icons: {
    icon: "/0rbb.png",
    apple: "/0rbb.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light scroll-smooth" data-theme="light" style={{ colorScheme: "light" }}>
      <head>
        <meta name="color-scheme" content="light" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-screen flex flex-col antialiased selection:bg-[#5b3bd1] selection:text-white bg-white text-slate-900 overflow-x-clip w-full relative"
      >
        <ScrollRevealInit />
        <CtaModal />
        {children}
      </body>
    </html>
  );
}
