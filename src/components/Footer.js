import { ReactComponent as InIcon } from "../image/icon/in.svg";
import { ReactComponent as FacebookIcon } from "../image/icon/facebook.svg";
import { ReactComponent as InstagramIcon } from "../image/icon/instagram.svg";

export default function Footer() {
  return (
    <div className="bg-[#101c30] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-20 pt-24 pb-16">
          <div className="w-full lg:w-auto flex flex-wrap gap-16 mb-12 lg:mb-0">
            <div>
              <h1 className="text-2xl lg:text-3xl pb-6 font-bold">
                Top Products
              </h1>
              <ul className="flex flex-col gap-2">
                <li className="cursor-pointer hover:text-[#fbc738] transition-colors duration-200 text-sm lg:text-md">
                  Manage Reputation
                </li>
                <li className="cursor-pointer hover:text-[#fbc738] transition-colors duration-200 text-sm lg:text-md">
                  Power Tools
                </li>
                <li className="cursor-pointer hover:text-[#fbc738] transition-colors duration-200 text-sm lg:text-md">
                  Manage Website
                </li>
                <li className="cursor-pointer hover:text-[#fbc738] transition-colors duration-200 text-sm lg:text-md">
                  Marketing Service
                </li>
              </ul>
            </div>

            <div>
              <h1 className="text-2xl lg:text-3xl pb-6 font-bold">
                Quick Links
              </h1>
              <ul className="flex flex-col gap-2">
                <li className="cursor-pointer hover:text-[#fbc738] transition-colors duration-200 text-sm lg:text-md">
                  Jobs
                </li>
                <li className="cursor-pointer hover:text-[#fbc738] transition-colors duration-200 text-sm lg:text-md">
                  Brand Assets
                </li>
                <li className="cursor-pointer hover:text-[#fbc738] transition-colors duration-200 text-sm lg:text-md">
                  Investor Relations
                </li>
                <li className="cursor-pointer hover:text-[#fbc738] transition-colors duration-200 text-sm lg:text-md">
                  Terms of Service
                </li>
              </ul>
            </div>

            <div>
              <h1 className="text-2xl lg:text-3xl pb-6 font-bold">Features</h1>
              <ul className="flex flex-col gap-2">
                <li className="cursor-pointer hover:text-[#fbc738] transition-colors duration-200 text-sm lg:text-md">
                  Manage Reputation
                </li>
                <li className="cursor-pointer hover:text-[#fbc738] transition-colors duration-200 text-sm lg:text-md">
                  Power Tools
                </li>
                <li className="cursor-pointer hover:text-[#fbc738] transition-colors duration-200 text-sm lg:text-md">
                  Manage Website
                </li>
                <li className="cursor-pointer hover:text-[#fbc738] transition-colors duration-200 text-sm lg:text-md">
                  Marketing Service
                </li>
              </ul>
            </div>

            <div>
              <h1 className="text-2xl lg:text-3xl pb-6 font-bold">Resources</h1>
              <ul className="flex flex-col gap-2">
                <li className="cursor-pointer hover:text-[#fbc738] transition-colors duration-200 text-sm lg:text-md">
                  Guides
                </li>
                <li className="cursor-pointer hover:text-[#fbc738] transition-colors duration-200 text-sm lg:text-md">
                  Research
                </li>
                <li className="cursor-pointer hover:text-[#fbc738] transition-colors duration-200 text-sm lg:text-md">
                  Experts
                </li>
                <li className="cursor-pointer hover:text-[#fbc738] transition-colors duration-200 text-sm lg:text-md">
                  Marketing Service
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-auto flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="mb-8">
              <h1 className="text-2xl lg:text-3xl pb-6 font-bold">
                Newsletter
              </h1>
              <p className="text-sm lg:text-lg mb-4">
                You can trust us. We only send promo offers.
              </p>
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="bg-[#344f6d] text-white px-4 py-3 rounded-none sm:rounded-l-md outline-none mb-2 sm:mb-0"
                />
                <button className="bg-[#fbc738] text-[#5c4006] font-bold px-4 py-3 rounded-none sm:rounded-r-md">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between py-10 border-t border-white/20">
          <h2 className="text-sm lg:text-lg font-bold text-center w-full lg:w-auto mb-6 lg:mb-0">
            Copyright © 2021 All rights reserved | This template is made by
            Tech2etc
          </h2>
          <div className="flex items-center gap-2">
            <div className="bg-white/30 backdrop-blur-md p-3 inline-block hover:bg-[#fbc738] transition-colors duration-200 hover:text-black cursor-pointer text-white">
              <InIcon className="w-5 h-5" />
            </div>
            <div className="bg-white/30 backdrop-blur-md p-3 inline-block hover:bg-[#fbc738] transition-colors duration-200 hover:text-black cursor-pointer text-white">
              <FacebookIcon className="w-5 h-5" />
            </div>
            <div className="bg-white/30 backdrop-blur-md p-3 inline-block hover:bg-[#fbc738] transition-colors duration-200 hover:text-black cursor-pointer text-white">
              <InstagramIcon className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
