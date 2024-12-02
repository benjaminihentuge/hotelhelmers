import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Hotel Helmers',
  description: 'Comfort and luxury at its finest!',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        {children}
      </body>
    </html>
  );
}
