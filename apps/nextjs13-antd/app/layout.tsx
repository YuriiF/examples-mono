import { AntdRegistry } from '@ant-design/nextjs-registry';

import './global.css';

export const metadata = {
  title: 'Nextjs 13 with Ant Design',
  description: 'Example app with Nextjs 13 and Ant Design',
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <AntdRegistry>{children}</AntdRegistry>
    </body>
  </html>
);

export default RootLayout;
