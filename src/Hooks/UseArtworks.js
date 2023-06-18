
import {useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getData } from "@/services/getCollection";
import { getQuery } from "@/utils/getQuery";


export const useArtworks = (endpoint) =>{
    const [loading, setLoading] = useState(false)
    const [artworks, setArtworks] = useState()
    const [page, setPage] = useState(1)
    const [actualPage, setNewPage] = useState(1)

    const router = useRouter()

    useEffect(()=> {
        setLoading(true)
        const query = getQuery(router.asPath)
        getData(endpoint, page , query)
        .then( artworks =>{
            {setArtworks(artworks)
            setLoading(false)}            
        } )  
    }, [router,page])




    return {artworks, loading, page,actualPage, setNewPage, setPage}
}
