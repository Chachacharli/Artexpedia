
import CardArtwork from "./CardArtwork"
import Masonry from "react-masonry-css"
import { ListNotFound } from "@/components/NotFoundSearcher/NotFoundSearcher"


const ListOfArtworks = ({artworks}) =>{
    return(
        
        <div id="list-artworks" className="row">
            <Masonry
              breakpointCols={4}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
            {
           artworks && artworks.data.length != 0 

            ? artworks && artworks.data.map((obra,idx) =>{
                return(
                    <CardArtwork 
                    key={obra.id} 
                    id={obra.id}
                    titulo={obra.title} 
                    fecha={obra.date_end} 
                    artista={obra.artist_display} 
                    identifier={obra.image_id} 
                    alt={obra.thumbnail?.alt_text}/>
                )
            })
                : <ListNotFound/>
                
                }
            </Masonry>
        </div>

    )
}


export default ListOfArtworks;