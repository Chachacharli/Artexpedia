import { useEffect, useState } from "react"
import getDailyArtwork from "@/services/getDailyArtwork"
import Footer from "../main/Footer"
import { DailyArtworkMain } from "./DailyArtworksMain"

export function DailyArtwork(){
    const [artwork, setArtwork] = useState()
    useEffect(()=>{
        getDailyArtwork()
        .then(art => setArtwork(art))
    },[])
    
    return(
        <section className="min-vh-100">
            <div className="container">
                <br />
                { artwork && <DailyArtworkMain 
                                    title={artwork.data.title} 
                                    date_start={artwork.data.date_start}
                                    date_end={artwork.data.date_end}
                                    author={artwork.data.artist_title} 
                                    medium_display={artwork.data.medium_display}
                                    dimensions={artwork.data.dimensions}
                                    department_title={artwork.data.department_title}
                                    image_id={artwork.data.image_id}
                                    alt_text={artwork.data.thumbnail.alt_text}/>}  
            </div>
            <Footer></Footer>
        </section>
    )
}