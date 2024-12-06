import LogoImage from "../image/img/Logo.jpg";

export default function Navbar() {
  return (
    <nav className="bg-white text-[#44415f] shadow-md">
      <div className="container mx-auto px-4 py-4 md:py-6 flex items-center justify-between">
        <div>
          <a href="./home">
            <img src={LogoImage} alt="Logo" className="w-auto h-20 md:h-24" />
          </a>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-10">
            <li>
              <a
                href="./home"
                className="hover:text-[#f4cd3e] font-semibold transition ease-in duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="./about"
                className="hover:text-[#f4cd3e] font-semibold transition ease-in duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="./blog"
                className="hover:text-[#f4cd3e] font-semibold transition ease-in duration-200"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="./courses"
                className="hover:text-[#f4cd3e] font-semibold transition ease-in duration-200"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="./contact"
                className="hover:text-[#f4cd3e] font-semibold transition ease-in duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
          <a
            href="#"
            className="border-2 border-[#44415f] text-[#44415f] px-7 py-3 rounded-lg font-semibold hover:bg-[#44415f] hover:text-white transition ease-in duration-200"
          >
            Join For Free
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button className="block md:hidden text-[#44415f] focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
