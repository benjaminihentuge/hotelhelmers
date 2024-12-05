import './globals.css';
import { ReactNode } from 'react';
import Header from './components/Header'; // Ensure these components exist in the correct path
import Footer from './components/Footer';

export const metadata = {
  title: 'Hotel Helmers',
  description: 'Comfort and luxury at its finest!',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <Header /> {/* Global Header */}
        <main>{children}</main> {/* Main content for each page */}
        <Footer /> {/* Global Footer */}
      </body>
    </html>
  );
}
