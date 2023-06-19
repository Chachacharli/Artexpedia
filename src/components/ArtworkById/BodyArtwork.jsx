import { HeaderArtist } from "./HeaderArtist"
import { TextArtist } from "./TextArtist"
import { RowDataArtwork } from "./RowDataArtwork"

export const BodyArtwork = ({data}) => {
    return(
        <main className="container">
            <hr />
            <HeaderArtist 
            tittle={data.data.artist_title}
            place_origin={data.data.place_of_origin}
            date_start={data.data.date_start}
            date_end={data.data.date_end}/>
            <TextArtist id={data.data.id}/>
            <RowDataArtwork data={data}/>
        </main>
    )
}

