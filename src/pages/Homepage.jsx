import BRANDS from "../components/BRANDS";
import Navbar from "../components/Navbar";
import FootersV2 from "../components/FootersV2";
import Features from "../components/Features";

const Homepage = () => {
  return (
    <div className="relative bg-lavender w-full h-[1635px] overflow-hidden">
      <Navbar/>
      <Features/>
      <BRANDS/>
      <FootersV2/>
    </div>
  );
};

export default Homepage;
