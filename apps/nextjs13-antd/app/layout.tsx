import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Inter } from 'next/font/google';

import { MainLayout } from '@examples/ui/layouts';

const inter = Inter({ subsets: ['latin'] });

import './global.css';

export const metadata = {
  title: 'Nextjs 13 with Ant Design',
  description: 'Example app with Nextjs 13 and Ant Design',
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
          <MainLayout>{children}</MainLayout>
        </AntdRegistry>
      </body>
    </html>
  );
}
