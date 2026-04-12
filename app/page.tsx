import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import RoomsSection from "@/components/sections/RoomsSection";
import RegionSection from "@/components/sections/RegionSection";
import BookingSection from "@/components/sections/BookingSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fcfcf7] text-stone-900">
        <HeroSection />
        <RoomsSection />
        <RegionSection />
        <BookingSection />
        <Footer />
      </main>
    </>
  );
}
