import Navbar from '@/features/ui/components/navbar/navbar';
import Sidebar from '@/features/ui/components/sidebar/sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="max-h-[100vh] w-[calc(100%)]">
        <div className="flex">
          <Sidebar />
          <div className="flex flex-1 flex-col">
            <Navbar />
            <section className="flex flex-col">{children}</section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
