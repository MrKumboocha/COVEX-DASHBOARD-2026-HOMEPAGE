import './globals.css';

export const metadata = {
  title: 'Covex',
  description: 'Websites that convert. Automations that scale.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
