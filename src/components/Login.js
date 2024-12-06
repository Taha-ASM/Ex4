import LoginImage from "../image/img/Login.jpg";

export default function Login() {
  return (
    <div className="relative w-full h-[40rem] md:h-[49rem]">
      <div className="relative h-full">
        <img
          src={LoginImage}
          alt="School"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="container absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between p-4 z-10">
        <div className="text-white flex-1 text-center md:text-left">
          <p className="font-semibold text-lg">Get 100 Online for Free</p>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold pb-8 md:pb-16">
            Register To Get It
          </h1>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-5">
            <div className="flex flex-col px-6 py-2 md:px-10 md:py-3 bg-white/30 rounded-box backdrop-blur-md text-white">
              <span className="countdown font-mono text-2xl md:text-4xl lg:text-5xl">
                <span style={{ "--value": 15 }}></span>
              </span>
              days
            </div>
            <div className="flex flex-col px-6 py-2 md:px-10 md:py-3 bg-white/30 rounded-box backdrop-blur-md text-white">
              <span className="countdown font-mono text-2xl md:text-4xl lg:text-5xl">
                <span style={{ "--value": 10 }}></span>
              </span>
              hours
            </div>
            <div className="flex flex-col px-6 py-2 md:px-10 md:py-3 bg-white/30 rounded-box backdrop-blur-md text-white">
              <span className="countdown font-mono text-2xl md:text-4xl lg:text-5xl">
                <span style={{ "--value": 24 }}></span>
              </span>
              min
            </div>
            <div className="flex flex-col px-6 py-2 md:px-10 md:py-3 bg-white/30 rounded-box backdrop-blur-md text-white">
              <span className="countdown font-mono text-2xl md:text-4xl lg:text-5xl">
                <span style={{ "--value": 56 }}></span>
              </span>
              sec
            </div>
          </div>
        </div>
        <div className="bg-white p-6 md:p-10 rounded-lg mt-8 md:mt-0 w-full md:w-auto">
          <div className="flex flex-col">
            <h1 className="text-black text-2xl md:text-3xl font-semibold pt-6 md:pt-16 pb-4 md:pb-8">
              Create Free Account NOW!
            </h1>
            <div className="flex gap-4 flex-col">
              <input
                type="text"
                placeholder="Name"
                className="bg-white text-black px-3 py-4 border-2 border-[#7557b2] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white text-black px-3 py-4 border-2 border-[#7557b2] focus:outline-none"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="bg-white text-black px-3 py-4 border-2 border-[#7557b2] focus:outline-none"
              />
            </div>
          </div>
          <button className="bg-[#fac63d] text-white hover:bg-white hover:text-[#313559] transition duration-200 outline py-4 px-8 md:px-16 rounded-lg font-bold mt-6 md:mt-10">
            Visit Courses
          </button>
        </div>
      </div>
    </div>
  );
}
