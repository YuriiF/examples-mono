import { SideNav } from '@examples/features/dashboard';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row md:overflow-visible">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6  md:p-12">{children}</div>
    </div>
  );
}
