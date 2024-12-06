import Navbar from "../components/Navbar";
import BannerPurche from "../components/BannerPurche";
import Footer from "../components/Footer";
import { ReactComponent as CameraIcon } from "../image/icon/camera.svg";
import { ReactComponent as ArticalIcon } from "../image/icon/artical.svg";
import { ReactComponent as ClowdIcon } from "../image/icon/clowd.svg";
import { ReactComponent as InfinityIcon } from "../image/icon/infinity.svg";
import { ReactComponent as MobileIcon } from "../image/icon/mobile.svg";
import { ReactComponent as PinIcon } from "../image/icon/pin.svg";
import { ReactComponent as CupIcon } from "../image/icon/cup.svg";
import { ReactComponent as StarIcon } from "../image/icon/star.svg";
import { ReactComponent as EmptyStarIcon } from "../image/icon/emptystar.svg";
import { ReactComponent as CheckIcon } from "../image/icon/check.svg";
import FirstCodingImage from "../image/img/firstcoding.jpg";
import LogoImage from "../image/img/Logo.jpg";

export default function Purche() {
  const user = {
    image: LogoImage,
    name: "Jhon Doe",
    job: "Web Developer At Google",
  };
  return (
    <div>
      <Navbar />
      <BannerPurche />
      <div className="bg-white py-20">
        <div className="container flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/5">
            <img
              src={FirstCodingImage}
              alt="Course Image"
              className="rounded-xl mb-8 lg:mb-0 lg:mr-8 lg:float-left"
            />
            <div className="flex flex-col gap-2 lg:w-3/5">
              <h1 className="text-black text-4xl lg:text-4xl pt-5 font-bold">
                JavaScript Beginner Course
              </h1>
              <div className="flex items-center gap-2">
                {[...Array(4)].map((_, index) => (
                  <StarIcon key={index} className="w-4 h-4 fill-[#ebc611]" />
                ))}
                <EmptyStarIcon className="w-4 h-4 fill-[#ebc611]" />
              </div>
              <p className="text-gray-700">
                Tempor in ut eu esse esse. Et consectetur dolore commodo nostrud
                mollit ipsum fugiat adipisicing mollit quis ea ut id. Occaecat
                sunt aute excepteur anim et sit amet ad. Laborum ipsum officia
                pariatur dolore quis.
              </p>
              <div className="flex items-center justify-between">
                <p className="bg-[#e0dcee] inline-block px-8 py-4 text-3xl text-[#4635b5] font-bold">
                  $49.00
                </p>
              </div>
            </div>
            <h1 className="text-black text-2xl font-bold mt-8 lg:mt-12">
              Instructor
            </h1>
            <div className="flex items-center mt-4 lg:mt-8 pb-6 border-b border-black">
              <img
                src={user.image}
                alt="Instructor Image"
                className="w-24 h-24 rounded-full mr-4"
              />
              <div>
                <h1 className="text-black text-lg font-bold">{user.name}</h1>
                <p className="text-gray-600 text-sm">{user.job}</p>
              </div>
            </div>
            <h1 className="text-black text-2xl font-bold mt-8 lg:mt-12">
              Course Overview
            </h1>
            <div className="flex flex-col gap-6 text-gray-700 pb-6 border-b border-black">
              <p>
                JavaScript is the most important programming language you need
                to learn as a web developer - and with this course, you make
                sure that you will not miss a single thing you have to know as a
                JavaScript developer!
              </p>
              <p>
                This is the most comprehensive and modern course you can find on
                JavaScript - it's based on all my JavaScript knowledge AND
                teaching experience. It's both a complete guide, starting with
                the core basics of the language, as well as an extensive
                reference of the JavaScript language and environment, ensuring
                that both newcomers as well as experienced JavaScript developers
                get a lot out of this course!
              </p>
              <p>
                It's a huge course because it's packed with important knowledge
                and helpful content. From the core basics, over advanced
                concepts and JavaScript specialties, all the way up to expert
                topics like performance optimization and testing - this course
                has it all. My goal was to create your go-to resource for the
                JavaScript language, which you can not just use for learning it
                but also as a resource you can come back to and look up
                important topics.
              </p>
            </div>
            <div className="mt-8 lg:mt-12">
              <h1 className="text-black text-2xl font-bold pb-5">
                What you'll learn
              </h1>
              <ul className="flex flex-col gap-2 text-gray-800">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-5 fill-[#6153cb]" /> JavaScript
                  from scratch - beginner to advanced
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-5 fill-[#6153cb]" /> Everything
                  you need to become a JavaScript expert and apply for
                  JavaScript jobs
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-5 fill-[#6153cb]" /> All about
                  variables, functions, objects, and arrays
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-5 fill-[#6153cb]" /> All core
                  features and concepts you need to know in modern JavaScript
                  development
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-5 fill-[#6153cb]" />{" "}
                  Project-driven learning
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-5 fill-[#6153cb]" />{" "}
                  Object-oriented programming
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full mt-12 lg:mt-0 lg:w-2/5 flex flex-col items-center">
            <h1 className="text-black text-2xl font-bold">
              This course includes:
            </h1>
            <ul className="flex flex-col gap-3 my-6 text-gray-700">
              <li className="flex items-center gap-5">
                <CameraIcon className="w-5 h-5 fill-[#5f53cc]" />
                <span>52 hours video</span>
              </li>
              <li className="flex items-center gap-5">
                <ArticalIcon className="w-5 h-5 fill-[#5f53cc]" />
                <span>75 articles</span>
              </li>
              <li className="flex items-center gap-5">
                <ClowdIcon className="w-5 h-5 fill-[#5f53cc]" />
                <span>Downloadable resources</span>
              </li>
              <li className="flex items-center gap-5">
                <InfinityIcon className="w-5 h-5 fill-[#5f53cc]" />
                <span>Full lifetime access</span>
              </li>
              <li className="flex items-center gap-5">
                <MobileIcon className="w-5 h-5 fill-[#5f53cc]" />
                <span>Access on mobile and TV</span>
              </li>
              <li className="flex items-center gap-5">
                <PinIcon className="w-5 h-5 fill-[#5f53cc]" />
                <span>Assignments</span>
              </li>
              <li className="flex items-center gap-5">
                <CupIcon className="w-5 h-5 fill-[#5f53cc]" />
                <span>Certificate of completion</span>
              </li>
            </ul>
            <button className="bg-[#323188] py-4 px-14 text-white font-bold text-lg rounded-lg">
              Enroll Course
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
