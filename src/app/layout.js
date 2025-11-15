import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Fixedfooter from '../components/Footer';
import Header from '../components/Header';

export const metadata = {
  title: 'Veritas Measurement',
  description: 'Precision measurement & gas chromatography services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
      
        <Fixedfooter />
      </body>
    </html>
  );
}
