import { useEffect, useState } from "react"

export const TextArtist = ({id}) => {
    const IFF_MANIFEST_URL = `https://api.artic.edu/api/v1/artworks/${id}/manifest.json `

    const [text, setText] = useState()

    useEffect(()=>{
        fetch(IFF_MANIFEST_URL)
        .then(res => res.json())
        .then(response =>
            {
            setText(response)
        }    
            )
    },[])
    
    return(
        <section className="my-">
            <p style={{textAlign: 'justify'}}>
                {text && text.description[0].value}
            </p>        
        </section>
    )
}

