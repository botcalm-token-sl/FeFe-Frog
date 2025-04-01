import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { LayoutProps } from "@/types/MainLayoutTypes";

const MainLayout = ({ sectionRefs, children }: LayoutProps) => {
  return (
    <div className="min-h-screen overflow-hidden bg-[#47A4CF]">
      <Navbar sectionRefs={sectionRefs} />
      <div className=" mt-[50px] md:mt-[73px]">
        <main>{children}</main>
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayout;
