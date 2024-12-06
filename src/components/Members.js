import React, { useEffect, useState } from "react";
import { ReactComponent as InIcon } from "../image/icon/in.svg";
import { ReactComponent as FacebookIcon } from "../image/icon/facebook.svg";
import { ReactComponent as InstagramIcon } from "../image/icon/instagram.svg";

export default function Members() {
  const [user, setUser] = useState([]);

  async function getUser() {
    const res = await fetch("https://api.github.com/users");
    setUser(await res.json());
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="bg-white py-10 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col text-center gap-2 pb-10 md:pb-24">
          <h1 className="text-3xl md:text-5xl font-bold text-[#242456]">
            Community Experts
          </h1>
          <p className="text-[#363636] text-lg md:text-xl">
            Replenish man have thing gathering lights yielding shall you
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {user.slice(0, 4).map((i) => (
            <div className="flex flex-col items-center text-center w-full md:w-1/3 lg:w-1/4 max-w-sm">
              <img
                src={i.avatar_url}
                alt={i.login}
                className="rounded-full w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48"
              />
              <h1 className="text-lg md:text-xl text-black font-bold pt-4">
                {i.login}
              </h1>
              <p className="text-black font-semibold text-md md:text-lg pb-4">
                Python & Full Stack Developer
              </p>
              <div className="flex items-center gap-2">
                <div className="cursor-pointer border-2 border-black hover:bg-[#191765] hover:fill-white transition ease-in duration-200 p-3 md:p-4 rounded">
                  <InIcon className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="cursor-pointer border-2 border-black hover:bg-[#191765] hover:fill-white transition ease-in duration-200 p-3 md:p-4 rounded">
                  <FacebookIcon className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="cursor-pointer border-2 border-black hover:bg-[#191765] hover:fill-white transition ease-in duration-200 p-3 md:p-4 rounded">
                  <InstagramIcon className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
