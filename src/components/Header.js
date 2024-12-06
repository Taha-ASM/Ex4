import SchooleImage from "../image/img/school.jpg";

export default function Header() {
  return (
    <div className="w-full">
      <div className="relative">
        <div>
          <img
            src={SchooleImage}
            alt="School"
            className="w-full h-[30rem] md:h-[40rem] lg:h-[49rem] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center pb-5">
            Enhance Your Future With TechEduca
          </h1>
          <p className="text-sm md:text-base lg:text-lg font-semibold text-center w-full md:w-8/12 lg:w-6/12 pb-6">
            Tempor tempor do proident consequat eiusmod cillum anim eiusmod
            commodo cillum velit cillum irure. Pariatur fugiat minim amet minim
            aute incididunt reprehenderit. Dolore fugiat elit id ullamco ut nisi
            qui et ipsum. Qui non consequat ex qui adipisicing minim laboris ad
            enim nulla fugiat nulla.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <button className="px-6 md:px-8 lg:px-10 py-2 md:py-3 rounded-lg font-bold bg-[#151764] hover:bg-white hover:text-[#313559] transition duration-200">
              Learn More
            </button>
            <button className="px-6 md:px-8 lg:px-10 py-2 md:py-3 rounded-lg font-bold bg-[#fcc93c] hover:bg-white hover:text-[#313559] transition duration-200">
              Visit Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
