import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurStory from "@/components/OurStory";
import OurValues from "@/components/OurValues";
import PlatformUsers from "@/components/PlatformUsers";
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
    </>
  );
}
