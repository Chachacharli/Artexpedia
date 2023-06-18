import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useImage } from "@/Hooks/fetcherImage";


const TextArtist = ({id}) => {
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


const BodyArtwork = ({data}) => {
    return(
        <main className="container">
            <hr />
            <div>
                <p className="fs-5">{data.data.artist_title}</p>
                <p className="text-secondary">{data.data.place_of_origin} {data.data.date_start} - {data.data.date_end}</p>
            </div>
            <TextArtist id={data.data.id}/>
            <div>
            <div className="my-5 col-md-4">
                <table className="table">
                    <tbody>
                        <tr>
                            <th scope="row">Department</th>
                            <td>{data.data.department_title}</td>
                        </tr>
                        <tr>
                            <th scope="row">Artist</th>
                            <td>{data.data.artist_title}</td>
                        </tr>
                        <tr>
                            <th scope="row">Title</th>
                            <td>{data.data.title}</td>
                        </tr>                                        
                        <tr>
                            <th scope="row">Place of origin </th>
                            <td>{data.data.place_of_origin}</td>
                        </tr>
                        <tr>
                            <th scope="row">Date  </th>
                            <td>@fat</td>
                        </tr>       
                        <tr>
                            <th scope="row">Medium  </th>
                            <td>{data.data.medium_display}</td>
                        </tr>  
                        <tr>
                            <th scope="row">Dimensions  </th>
                            <td>{data.data.dimensions}</td>
                        </tr>  
                        <tr>
                            <th scope="row">Credit line </th>
                            <td>{data.data.credit_line}</td>
                        </tr>             
                        <tr>
                            <th scope="row">Reference Number</th>
                            <td>{data.data.main_reference_number}</td>
                        </tr>                                                                                                            
                   
                    </tbody>
                </table>
            </div>


            </div>
        </main>
    )
}

const HeaderArticle = ({title = 'Nulo ', img, date,  alt}) => {
    const {image} = useImage(img)
    return(
        <article className="p-3 mb-2 bg-secondary-subtle text-emphasis-secondary">
            <section className="container my-4 d-flex flex-column justify-content-center align-items-center">
                <figure className="image-id-container">
                    <img className="" loading="lazy" src={image} alt={alt} />
                </figure>
                <h2 className="container w-auto">
                    {title}
                </h2>
                <small className='fs-5 text-secondary'>
                    {date}
                </small>
            </section>
        </article>
    )
}
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
                <h1>cargando</h1> : 

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