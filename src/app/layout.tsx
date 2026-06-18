
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mendo Finances - Microfinance Hybride & Innovation Digitale',
  description: 'Mendo Finances rapproche les services financiers des communautés avec proximité et innovation digitale.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
