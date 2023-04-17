
import { DailyArtwork } from "@/components/daily-artwork/daily-artworks";
import Footer from "@/components/main/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function Page() {
    return(
        <>
            <Navbar/>   
            <DailyArtwork></DailyArtwork>
            <Footer/>
        </>
    );
  }