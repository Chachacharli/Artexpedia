
import CardArtwork from "./CardArtwork"



const ListOfArtworks = ({artworks}) =>{

    return(

        <div className="row">
            {artworks && artworks.data.map((obra,idx) =>{
                return(
                    <CardArtwork key={obra.id} 
                    titulo={obra.title} 
                    fecha={obra.date_end} 
                    artista={obra.artist_display} 
                    identifier={obra.image_id} 
                    alt={obra.thumbnail?.alt_text}/>
                )
            })}
        </div>

    )
}


export default ListOfArtworks;