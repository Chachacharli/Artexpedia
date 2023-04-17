
import { use, useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import MainCollection from "./MainCollection";
import { useRouter } from "next/router";
import { getCollection } from "@/services/getCollection";
import Footer from "../main/Footer";
const API_URL_ARTWORKS_INITIAL = `https://api.artic.edu/api/v1/artworks?page=2&limit=10`     

const Collection = () => {
    const [artworks, setArtworks] = useState()  
    const router = useRouter()
    
    useEffect(()=>{
        if(router.asPath === '/collection'){
            fetch(API_URL_ARTWORKS_INITIAL).
            then(res => res.json())
            .then(response => setArtworks(response))
        }else{
            fetch(`https://api.artic.edu/api/v1/artworks/search?q=${router.asPath.split('q=').slice((router.asPath.split('q=').length -1 ))[0]}&fields=id,image_id,title,thumbnail&query[term][is_public_domain]=true`).
            then(res => res.json())
            .then(response => setArtworks(response))
        
        }            
    },[router.asPath])

    return(
        <>
            <Navbar></Navbar>    
            <MainCollection artworks={artworks} />
            <Footer/>
        </>
    )
}

export default Collection;