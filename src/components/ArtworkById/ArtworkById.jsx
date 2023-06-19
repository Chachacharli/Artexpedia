import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Spiner from "../Spiner/Spiner";
import { HeaderArticle } from "./HeaderArticle";

import { BodyArtwork } from "./BodyArtwork";




const ArtworkById = () =>{
    
    const route = useRouter()
    const [artwork, setArtwork] = useState()
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        await fetch(`https://api.artic.edu/api/v1/artworks/${route.query.id}`)
        .then(res => res.json())
        .then( response =>{
         setArtwork(response)     
         setLoading(false)
            } 
         )
    }    

    useEffect(()=>{
        if (route.asPath !== route.route) {
            setLoading(true)     
            fetchData()            
          }        
    },[route])

        return(
            <main className="min-vh-100">
                { loading ? 
                <Spiner></Spiner>: 
                artwork && 
                <>
                    <HeaderArticle 
                    title={artwork.data.title} 
                    img={artwork.data.image_id} 
                    alt={artwork.data.thumbnail?.alt_text}
                    date={artwork.data.date_display}/>
                    <BodyArtwork data={artwork}/>
                </>                
                }
            </main>            
        )
    }


export default ArtworkById;