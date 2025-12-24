import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Timeline from "../../components/Timeline";
import OurStory from "../../components/OurStory";
import Footer from "../../components/Footer";
import Venue from "../../components/Venue";
import Gallery from "../../components/Gallery";

export default function Home() {
  return (
    <div className="w-full min-h-screen text-gray-900 bg-[#BAB0C8]">
      <Navbar />
      <Hero />
      <OurStory />
       <Timeline />
       <Venue />
       <Gallery />
       <Footer />
    </div>
  );
}
