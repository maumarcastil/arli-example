import Navbar from '@/features/ui/components/navbar/navbar';
import Sidebar from '@/features/ui/components/sidebar/sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="flex h-screen">
        {/* sidebar */}
        <div className="hidden w-64 flex-col lg:flex">
          <Sidebar />
        </div>

        {/* main */}
        <div className="flex flex-1 flex-col overflow-y-auto">
          <Navbar />

          <main className="p-4">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
