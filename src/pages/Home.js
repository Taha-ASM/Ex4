import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Steps from "../components/Steps";
import Course from "../components/Course";
import Login from "../components/Login";
import Members from "../components/Members";
import Footer from "../components/Footer";

export default function home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Steps />
      <Course />
      <Login />
      <Members />
      <Footer />
    </div>
  );
}
