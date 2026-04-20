export const metadata = {
  title: 'Covex',
  description: 'Covex homepage',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
