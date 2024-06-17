import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurStory from "@/components/OurStory";
import OurTeam from "@/components/OurTeam";
import OurValues from "@/components/OurValues";
import OurVisions from "@/components/OurVisions";
import PlatformUsers from "@/components/PlatformUsers";
import Stats from "@/components/Stats";
import Voice from "@/components/Voice";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero/>
    <PlatformUsers/>
    <Voice/>
    <OurValues/>
    <OurStory/>
    <OurVisions/>
    <Stats/>
    <OurTeam/>
    <ContactUs/>
    <Footer/>
    </>
  );
}
