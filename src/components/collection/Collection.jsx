
import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import MainCollection from "./MainCollection";
import { useRouter } from "next/router";


const API_URL_ARTWORKS = `https://api.artic.edu/api/v1/artworks?page=2&limit=10`     


const Collection = () => {
    const router = useRouter()

    const [artworks, setArtworks] = useState()  

    useEffect(()=>{
        let ruta = router.asPath.split('q=')
        console.log(ruta[ruta.length - 1])
        fetch(API_URL_ARTWORKS).
        then(res => res.json())
        .then(response => setArtworks(response))
    },[router.asPath])

    return(
        <>
            <Navbar></Navbar>    
            <MainCollection artworks={artworks} />
        </>
    )
}

export default Collection;