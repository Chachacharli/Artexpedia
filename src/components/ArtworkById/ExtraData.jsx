import { Pill } from "./Pill"
import { TabContent } from "./TabContent"

export const ExtraDataArtwork = ({data}) => {
    const vars = [
        {
            title: 'Publication History',
            id: 'Publication',
            target: 'pills-publication'
        },
        {
            title: 'Exhibition History',
            id: 'Exhibition',
            target: 'pills-exhibition'
        },
        {
            title: 'Provenance Text',
            id: 'Provenance',
            target: 'pills-provenance'
        },

    ]

    return(
        <div className="p-5 col-md-8">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                {vars.map((obj,idx)=>{
                    return(
                        <Pill key={idx} obj={obj} idx={idx}/>
                    )
                })}

                </ul>

            <TabContent 
            publication={data.data.publication_history} 
            exhibition={data.data.exhibition_history} 
            provenance={data.data.provenance_text} />
            
        </div>
    )
} 
