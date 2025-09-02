import './globals.css';
import ThemeRegistry from '@/components/ThemeRegistry';

export const metadata = {
  title: 'Sadeepa Atigala',
  description: 'Portfolio of a BSc. IT student at SLIIT and Software Developer Intern at AASL',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}