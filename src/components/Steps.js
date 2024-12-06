import { ReactComponent as HatIcon } from "../image/icon/hat.svg";
import { ReactComponent as FileIcon } from "../image/icon/file.svg";
import { ReactComponent as MedalIcon } from "../image/icon/medal.svg";

export default function Steps() {
  return (
    <div className="bg-white pt-20 pb-36">
      <div className="container mx-auto">
        <div className="text-center pb-16">
          <h1 className="text-[#242456] text-5xl md:text-6xl font-bold pb-3">
            Awesome Features
          </h1>
          <p className="text-[#363636] text-lg md:text-xl">
            Replenish man have thing gathering lights yielding shall you
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
          <div className="flex flex-col items-center text-center">
            <HatIcon className="w-10 h-10 fill-[#242456]" />
            <h4 className="text-2xl text-[#242456] font-semibold pt-4 pb-2">
              Scholarship facility
            </h4>
            <p className="text-[#919097] max-w-xs mx-auto">
              One make creepeth, man bearing theira firmament won't great heaven
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FileIcon className="w-10 h-10 fill-[#242456]" />
            <h4 className="text-2xl text-[#242456] font-semibold pt-4 pb-2">
              Sell Online Course
            </h4>
            <p className="text-[#919097] max-w-xs mx-auto">
              One make creepeth, man bearing theira firmament won't great heaven
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <MedalIcon className="w-10 h-10 fill-[#242456]" />
            <h4 className="text-2xl text-[#242456] font-semibold pt-4 pb-2">
              Global Certification
            </h4>
            <p className="text-[#919097] max-w-xs mx-auto">
              One make creepeth, man bearing theira firmament won't great heaven
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
