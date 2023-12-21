import Review from "@/components/Review/Review";
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Reservation from "@/components/reservation/Reservation";
import Services from "@/components/services/Services";
import Team from "@/components/team/Team";


export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Team/>
      <Reservation/>
      <Review/>
      <Footer/>

    </>
  )
}
