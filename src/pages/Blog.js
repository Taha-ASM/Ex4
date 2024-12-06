import Navbar from "../components/Navbar";
import BannerBlog from "../components/BannerBlog";
import Footer from "../components/Footer";
import FirstCodingImage from "../image/img/firstcoding.jpg";
import SecondCodingImage from "../image/img/secondcoding.avif";
import ThirdCodingImage from "../image/img/thirdcoding.webp";
import FourthCodingImage from "../image/img/fourthcoding.png";

export default function Blog() {
  return (
    <div>
      <Navbar />
      <BannerBlog />
      <div className="bg-white py-20">
        <div className="container flex flex-col lg:flex-row">
          <div className="lg:w-1/2 pr-0 lg:pr-10 flex flex-col gap-10 lg:gap-20">
            <div className="flex flex-col lg:flex-row gap-6">
              <img
                src={FirstCodingImage}
                alt="Coding Example"
                className="w-full lg:w-1/2 h-auto rounded-xl mb-4"
              />
              <div className="lg:w-1/2">
                <h1 className="text-black font-bold text-xl lg:text-2xl pb-3">
                  Learn Web Development In The Easiest Way
                </h1>
                <p className="mb-4 text-[#8a8a84]">
                  Proident id incididunt laborum commodo cillum culpa aliqua ea
                  sit commodo officia. Quis aliqua ad dolor dolore non mollit
                  nisi officia cillum. Nostrud sit occaecat exercitation culpa
                  fugiat. Do est sit proident tempor incididunt nulla esse duis
                  incididunt tempor.
                </p>
                <button className="bg-[#131559] text-white py-3 px-8 rounded">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
              <img
                src={SecondCodingImage}
                alt="Coding Example"
                className="w-full lg:w-1/2 h-auto rounded-xl mb-4"
              />
              <div className="lg:w-1/2">
                <h1 className="text-black font-bold text-xl lg:text-2xl pb-3">
                  Learn Web Development In The Easiest Way
                </h1>
                <p className="mb-4 text-[#8a8a84]">
                  Proident id incididunt laborum commodo cillum culpa aliqua ea
                  sit commodo officia. Quis aliqua ad dolor dolore non mollit
                  nisi officia cillum. Nostrud sit occaecat exercitation culpa
                  fugiat. Do est sit proident tempor incididunt nulla esse duis
                  incididunt tempor.
                </p>
                <button className="bg-[#131559] text-white py-3 px-8 rounded">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
              <img
                src={ThirdCodingImage}
                alt="Coding Example"
                className="w-full lg:w-1/2 h-auto rounded-xl mb-4"
              />
              <div className="lg:w-1/2">
                <h1 className="text-black font-bold text-xl lg:text-2xl pb-3">
                  Learn Web Development In The Easiest Way
                </h1>
                <p className="mb-4 text-[#8a8a84]">
                  Proident id incididunt laborum commodo cillum culpa aliqua ea
                  sit commodo officia. Quis aliqua ad dolor dolore non mollit
                  nisi officia cillum. Nostrud sit occaecat exercitation culpa
                  fugiat. Do est sit proident tempor incididunt nulla esse duis
                  incididunt tempor.
                </p>
                <button className="bg-[#131559] text-white py-3 px-8 rounded">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
              <img
                src={FourthCodingImage}
                alt="Coding Example"
                className="w-full lg:w-1/2 h-auto rounded-xl mb-4"
              />
              <div className="lg:w-1/2">
                <h1 className="text-black font-bold text-xl lg:text-2xl pb-3">
                  Learn Web Development In The Easiest Way
                </h1>
                <p className="mb-4 text-[#8a8a84]">
                  Proident id incididunt laborum commodo cillum culpa aliqua ea
                  sit commodo officia. Quis aliqua ad dolor dolore non mollit
                  nisi officia cillum. Nostrud sit occaecat exercitation culpa
                  fugiat. Do est sit proident tempor incididunt nulla esse duis
                  incididunt tempor.
                </p>
                <button className="bg-[#131559] text-white py-3 px-8 rounded">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 pl-0 lg:pl-10">
            <h1 className="text-black text-4xl mb-6 font-bold">Categories</h1>
            <div className="space-y-4 text-[#8a8a84]">
              <p className="border-t border-[#8a8a84] font-semibold pt-2 cursor-pointer">
                Web Development
              </p>
              <p className="border-t border-[#8a8a84] font-semibold pt-2 cursor-pointer">
                Web Design
              </p>
              <p className="border-t border-[#8a8a84] font-semibold pt-2 cursor-pointer">
                App Development
              </p>
              <p className="border-t border-[#8a8a84] font-semibold pt-2 cursor-pointer">
                Frontend Web
              </p>
              <p className="border-t border-[#8a8a84] font-semibold pt-2 cursor-pointer">
                Python Programming
              </p>
              <p className="border-t border-[#8a8a84] font-semibold pt-2 cursor-pointer">
                JavaScript Hacks
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
