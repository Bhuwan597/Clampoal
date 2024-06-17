import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: 'Campoal <> Petition Platform',
  description: 'We offer complete solution to launch your social movements.',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-circularstdnormal">{children}</body>
    </html>
  );
}
