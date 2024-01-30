import './global.css';

export const metadata = {
  title: 'Nextjs14 Ant Design Example',
  description:
    'Nextjs14 with Ant Design Example, Nx, Strapi for content and tRPC as a backend API for simple LIKES',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
