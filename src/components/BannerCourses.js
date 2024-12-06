import BannerAboutImage from "../image/img/bannerabout.jpeg";

export default function BannerCourses() {
  return (
    <div className="relative w-full h-96">
      <img
        src={BannerAboutImage}
        alt="School"
        className="w-full h-96 object-cover"
      />
      <div className="absolute inset-0 h-full bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Courses /</h1>
      </div>
    </div>
  );
}
