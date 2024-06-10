import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Map from "@/components/Map";
import Reservation from "@/components/Reservation";
import StyleGuide from "@/components/StyleGuide";
import Menu from "@/components/menu";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
      <Header />
      <Hero />
      <Menu />
      <Reservation />
      <About />
      <Map />
      <Footer />
      {/* <StyleGuide /> */}
      {/* <div className="h-[400px]"></div> */}
    </main>
  );
}
