import { DailyArtworkButtons } from "./DailyArtworkButtons"
import { DailyArtworkImage } from "./DailyArtworkImage"
import { DailyArtworkInfo } from "./DailyArtworkInfo"



export const DailyArtworkMain = ({title,date_start,date_end,author,medium_display,dimensions,department_title, image_id,alt_text}) => {
    return(
        <div className="w-100">
            <DailyArtworkImage image_id={image_id} alt_text={alt_text} />
            <DailyArtworkInfo title={title} date_start={date_start} date_end={date_end} author={author} medium_display={medium_display} dimensions={dimensions} department_title={department_title}/>
            <DailyArtworkButtons/>
        </div>
    )
}