import Navbar from "../components/Navbar";
import BannerContact from "../components/BannerContact";
import Footer from "../components/Footer";
import { ReactComponent as HomeIcon } from "../image/icon/home.svg";
import { ReactComponent as PhoneIcon } from "../image/icon/phone.svg";
import { ReactComponent as EnvlopIcon } from "../image/icon/envlop.svg";
import { ReactComponent as InIcon } from "../image/icon/in.svg";
import { ReactComponent as FacebookIcon } from "../image/icon/facebook.svg";
import { ReactComponent as InstagramIcon } from "../image/icon/instagram.svg";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <BannerContact />
      <div className="bg-white py-20">
        <div className="container flex flex-col lg:flex-row">
          <div className="flex-1 lg:pr-12">
            <h1 className="text-[#231f46] font-bold text-4xl lg:text-5xl">
              Get in touch
            </h1>
            <p className="text-lg pt-4">
              Looking for help? Fill the form and start a new adventure
            </p>
            <div className="py-12 lg:py-20">
              <div className="pb-8">
                <h1 className="text-[#231f46] font-bold text-xl pb-4">
                  Headquarters
                </h1>
                <p className="flex items-center gap-4">
                  <HomeIcon className="h-4 fill-[#231f46]" /> 744 New York Ave,
                  Brooklyn, Kings, New York 10224
                </p>
              </div>
              <div className="pb-8">
                <h1 className="text-[#231f46] font-bold text-xl pb-4">Phone</h1>
                <div className="flex items-center gap-4">
                  <PhoneIcon className="h-4 fill-[#231f46]" />
                  <div>
                    <p>(+642) 245 356 432</p>
                    <p>(+420) 336 476 328</p>
                  </div>
                </div>
              </div>
              <div className="pb-8">
                <h1 className="text-[#231f46] font-bold text-xl pb-4">
                  Support
                </h1>
                <div className="flex items-center gap-4">
                  <EnvlopIcon className="h-4 fill-[#231f46]" />
                  <div>
                    <p>tahabrec@gmail.com</p>
                    <p>tinfox1000@gmail.com</p>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-[#231f46] font-bold text-xl pb-4">
                  Follow Us
                </h1>
                <div className="flex items-center gap-4">
                  <div className="cursor-pointer border-2 border-black hover:bg-[#191765] hover:text-white transition duration-200 rounded-full p-3">
                    <InIcon className="w-5 h-5" />
                  </div>
                  <div className="cursor-pointer border-2 border-black hover:bg-[#191765] hover:text-white transition duration-200 rounded-full p-3">
                    <FacebookIcon className="w-5 h-5" />
                  </div>
                  <div className="cursor-pointer border-2 border-black hover:bg-[#191765] hover:text-white transition duration-200 rounded-full p-3">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 lg:pl-12">
            <h1 className="text-[#231f46] text-4xl lg:text-5xl font-bold">
              Let's Connect
            </h1>
            <p className="text-lg pt-4">
              Integer at lorem aget diam facilisis lacinic ac id massa
            </p>
            <div className="py-12 lg:py-20">
              <div className="pb-6 lg:flex lg:gap-8">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-white px-4 py-3 text-black w-full lg:w-auto"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white px-4 py-3 text-black w-full lg:w-auto mt-4 lg:mt-0"
                />
              </div>
              <div className="flex  gap-6 lg:flex-col lg:gap-8">
                <input
                  type="text"
                  placeholder="Subject"
                  className="bg-white px-4 py-3 text-black w-full lg:w-[35.5rem]"
                />
                <input
                  type="text"
                  placeholder="How can I help you?"
                  className="bg-white px-4 py-3 text-black w-full lg:w-[35.5rem]"
                />
              </div>
              <button className="mt-8 lg:mt-10 bg-[#131559] text-white py-3 px-8 rounded">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
