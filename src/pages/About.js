import Navbar from "../components/Navbar";
import BannerAbout from "../components/BannerAbout";
import Steps from "../components/Steps";
import Footer from "../components/Footer";
import Um6pImage from "../image/img/um6p.png";
import OcpImage from "../image/img/ocp.png";
import CeoImage from "../image/img/ceo.png";
import SiliconImage from "../image/img/silicon.png";

export default function About() {
  return (
    <div>
      <Navbar />
      <BannerAbout />
      <Steps />
      <div className="bg-white py-20">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-6xl text-[#242456] font-bold text-center">
            Trusted By
          </h1>
          <p className="text-lg text-[#363636] text-center pt-5">
            Replenish man have thing gathering lights yielding shall you
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 pt-12">
            <img src={Um6pImage} alt="UM6P" className="w-40 md:w-64 h-auto" />
            <img src={OcpImage} alt="OCP" className="w-40 md:w-64 h-auto" />
            <img src={CeoImage} alt="CEO" className="w-40 md:w-64 h-auto" />
            <img
              src={SiliconImage}
              alt="Silicon"
              className="w-40 md:w-64 h-auto"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
