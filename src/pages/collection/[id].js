
import { DailyArtwork } from "@/components/daily-artwork/daily-artworks";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import ArtworkById from "@/components/ArtworkById/ArtworkById";



export default function Page() {

    return(
        
        <>
            <Navbar/>   
            <ArtworkById/>
            <Footer/>
        </>
    );
  }