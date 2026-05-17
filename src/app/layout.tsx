import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ThemeProvider } from '@/providers/theme';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'DevNest — Modern Software Development Agency',
  description: 'We build full-stack web apps, SaaS platforms, ERP systems, Shopify stores, and AI-powered products. Scalable, modern, fast.',
  openGraph: {
    title: 'DevNest',
    description: 'We build software that scales.',
    url: 'https://DevNest',
    siteName: 'DevNest',
    images: [
      {
        url: 'https://picsum.photos/seed/nexlify/1200/630',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevNest',
    description: 'We build software that scales.',
    images: ['https://picsum.photos/seed/nexlify/1200/630'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-accent-blue/30 selection:text-accent-blue">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
