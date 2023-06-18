import { ErrorDict } from "@/utils/ErrorDict";
import { useEffect, useState } from "react";

export const useImage = (identifier) => {
    const [image, setImage] = useState('')
    const IIIF_URL = `https://www.artic.edu/iiif/2/${identifier}/full/843,/0/default.jpg`

    useEffect(()=>{
        fetch(IIIF_URL)
        .then(res => res)
        .then(response => {
                if(response.status != 200){
                    setImage(ErrorDict.IMAGE_NOT_FOUND.src)
                    
                }
                else{
                    setImage(response.url)
                }
        })
    },[IIIF_URL])
    
    
    return { image }
}