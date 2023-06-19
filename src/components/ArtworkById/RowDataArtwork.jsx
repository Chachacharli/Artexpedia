import { DataTableArtwork } from "./DataTableArtwork"
import { ExtraDataArtwork } from "./ExtraData"

export const RowDataArtwork = ({data}) => {
    return(
        <div className="row">
                <DataTableArtwork data={data}/>
                <ExtraDataArtwork data={data}></ExtraDataArtwork>
        </div>
    )
}
