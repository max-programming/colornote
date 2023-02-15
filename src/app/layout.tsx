import Navbar from '@/components/Navbar';
import './globals.css';
import Providers from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers>
          <Navbar />
          <main className='container mx-auto mt-5'>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
