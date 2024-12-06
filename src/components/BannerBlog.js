import BannerAboutImage from "../image/img/bannerabout.jpeg";

export default function BannerBlog() {
  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96">
      <img
        src={BannerAboutImage}
        alt="School"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
          Blog
        </h1>
      </div>
    </div>
  );
}