import { ErrorDict } from "@/utils/ErrorDict";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useImage } from "@/Hooks/fetcherImage";




const CardArtwork = ({id, titulo, fecha, artista, identifier,alt}) =>{

    const {image} = useImage(identifier)
    
    return(
            
        <article>
            <Link className="text-decoration-none link-collection" href={`/collection/${id}`}>
            <div className="card card-collection my-2">
                <img loading="lazy" src={image} alt={alt} />
                <div>
                    <h3 className="fs-6 py-2">{titulo}</h3>
                    <p>{artista}</p> 
                </div>
            </div>
            </Link>
        </article>

    )
}

export default CardArtwork;