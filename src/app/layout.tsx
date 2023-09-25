import Navbar from '@/components/navbar'
import '@/app/globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/footer';

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='font-inter dark'>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer className="bg-black p-2  text-center">
        <Footer />
      </footer>

    </div>
  );
};
export default RootLayout;