import { Metadata } from 'next';
import { Rubik, Heebo } from 'next/font/google';
import './globals.css';
import React from 'react';
import { Schema } from './components/Schema';

// Font configuration
const rubik = Rubik({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-rubik',
  weight: ['400', '500', '700'],
});

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-heebo',
  weight: ['400', '500', '700'],
});

// Metadata configuration
export const metadata: Metadata = {
  title: 'מספרה דלתא - מספרה מקצועית ואיכותית',
  description: 'אנחנו מספרה מוביל בתחום המזון עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.',
  keywords: ['מספרה', 'עיצוב שיער', 'תספורת', 'צבע שיער', 'טיפוח'],
  authors: [{ name: 'מספרה דלתא' }],
  creator: 'מספרה דלתא',
  publisher: 'מספרה דלתא',
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://www.delta-salon.co.il',
    title: 'מספרה דלתא - מספרה מקצועית ואיכותית',
    description: 'אנחנו מספרה מוביל בתחום המזון עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.',
    siteName: 'מספרה דלתא',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035',
        width: 1200,
        height: 630,
        alt: 'מספרה דלתא',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מספרה דלתא - מספרה מקצועית ואיכותית',
    description: 'אנחנו מספרה מוביל בתחום המזון עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.',
    images: ['https://images.unsplash.com/photo-1560066984-138dadb4c035'],
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.delta-salon.co.il',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="he" dir="rtl" className={`${rubik.variable} ${heebo.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#FF6B6B" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-secondary text-gray-800 min-h-screen">
        <div id="layout-container" className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shadow-neumorphic">
                  מ
                </div>
                <h1 className="text-xl md:text-2xl font-bold text-primary">מספרה דלתא</h1>
              </div>
              <nav className="hidden md:flex space-x-6 text-right">
                <a href="#" className="text-gray-700 hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-gray-50 text-right">דף הבית</a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-gray-50 text-right">שירותים</a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-gray-50 text-right">גלריה</a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-gray-50 text-right">צור קשר</a>
              </nav>
              <button className="md:hidden text-gray-700 hover:text-primary p-2 rounded-lg hover:bg-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </header>

          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>

          <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-right">
                  <h3 className="text-xl font-bold mb-4 text-primary">מספרה דלתא</h3>
                  <p className="mb-4">אנחנו מספרה מוביל בתחום המזון עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.</p>
                  <div className="flex space-x-4 justify-end">
                    <a href="#" className="text-white hover:text-primary transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-primary transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-primary transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="text-right">
                  <h3 className="text-xl font-bold mb-4 text-primary">שעות פעילות</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>9:00 - 20:00</span>
                      <span>ראשון - חמישי</span>
                    </li>
                    <li className="flex justify-between">
                      <span>9:00 - 14:00</span>
                      <span>שישי</span>
                    </li>
                    <li className="flex justify-between">
                      <span>סגור</span>
                      <span>שבת</span>
                    </li>
                  </ul>
                </div>
                <div className="text-right">
                  <h3 className="text-xl font-bold mb-4 text-primary">צור קשר</h3>
                  <address className="not-italic">
                    <p className="mb-2">רחוב הרצל 123, תל אביב</p>
                    <p className="mb-2">טלפון: 03-1234567</p>
                    <p className="mb-2">דוא"ל: info@delta-salon.co.il</p>
                  </address>
                  <div className="mt-4">
                    <button className="bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-lg shadow-neumorphic transition-all hover:shadow-neumorphic-hover">
                      קבע תור עכשיו
                    </button>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                <p>© {new Date().getFullYear()} מספרה דלתא. כל הזכויות שמורות.</p>
              </div>
            </div>
          </footer>
        </div>
        <Schema />
      </body>
    </html>
  );
}