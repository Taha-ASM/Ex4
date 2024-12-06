import React from "react";
import { ReactComponent as StarIcon } from "../image/icon/star.svg";
import { ReactComponent as EmptyStarIcon } from "../image/icon/emptystar.svg";
import FirstCoursesImage from "../image/img/firstcour.jpg";
import SecondCoursesImage from "../image/img/secondcour.webp";
import ThirdCoursesImage from "../image/img/thirdcour.webp";
import FourthCoursesImage from "../image/img/fourthcours.jpg";
import FifthCoursesImage from "../image/img/fifthcours.jpg";
import SixthCoursesImage from "../image/img/sisxthcours.png";

export default function Course() {
  const courses = [
    {
      image: FirstCoursesImage,
      date: "Updated 21/8/21",
      title: "JavaScript Beginners Course",
      rating: "(239)",
      price: "49.00",
    },
    {
      image: SecondCoursesImage,
      date: "Updated 21/8/21",
      title: "HTML & CSS Beginners Course",
      rating: "(239)",
      price: "49.00",
    },
    {
      image: ThirdCoursesImage,
      date: "Updated 21/8/21",
      title: "Python Beginners Course",
      rating: "(239)",
      price: "49.00",
    },
    {
      image: FourthCoursesImage,
      date: "Updated 21/8/21",
      title: "Web Design Crash Course",
      rating: "(239)",
      price: "49.00",
    },
    {
      image: FifthCoursesImage,
      date: "Updated 21/8/21",
      title: "Web Development Crash Course",
      rating: "(239)",
      price: "49.00",
    },
    {
      image: SixthCoursesImage,
      date: "Updated 21/8/21",
      title: "Angular Beginners Course",
      rating: "(239)",
      price: "49.00",
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#242456] font-bold pb-3">
            Our Popular Courses
          </h1>
          <p className="text-[#363636] text-lg sm:text-xl">
            Replenish man have thing gathering lights yielding shall you
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.slice(0, 6).map((course) => (
            <a href="./purche" key={course.id} className="group">
              <div className="relative flex items-center justify-center w-full h-72">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-64 object-cover rounded-lg transition-transform duration-200 transform group-hover:scale-105"
                />
                <p className="absolute bottom-0 right-2 bg-[#494a87] text-white font-bold text-lg px-3 py-1 rounded-full">
                  ${course.price}
                </p>
              </div>
              <div className="mt-4">
                <p className="text-gray-500 text-sm">{course.date}</p>
                <h2 className="text-black text-xl font-bold py-1">
                  {course.title}
                </h2>
                <div className="flex items-center gap-0.5">
                  {[...Array(4)].map((_, index) => (
                    <StarIcon key={index} className="w-4 h-4 text-[#ebc611]" />
                  ))}
                  <EmptyStarIcon className="w-4 h-4 text-[#ebc611]" />
                  <p className="ml-2 text-gray-600">{course.rating}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
