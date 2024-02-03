import './global.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Inter } from 'next/font/google';

import { RootLayout as MainRootLayout } from '@examples/ui/layouts';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <AntdRegistry>
          <MainRootLayout>{children}</MainRootLayout>
        </AntdRegistry>
      </body>
    </html>
  );
}
