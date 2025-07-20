import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'The Jester of Crimson Veils',
  description:
    'Enter the Hall of Crimson Veils — a mythic shrine where death dances, shadows whisper, and the Jester dreams.',
  icons: {
    icon: '/mask.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
