export const DailyArtworkInfo = ({title,date_start, date_end, author,medium_display,dimensions,department_title}) =>{
    return(
        <div>
            <br />
            <h2 className=" fs-1 w-100 d-flex justify-content-center">{title}</h2>
            <div className="bg-author-info my-4 fs-4 bg-opacity-10 border border-start-0 border-end-0">
                <p className="w-100 d-flex justify-content-center p-0 m-0">{author}</p>
                <p className="w-100 d-flex justify-content-center p-0 m-0">{date_start}-{date_end}</p>
            </div>
            <p>{dimensions}</p>
            <p className="text-display fs-5">{medium_display}</p>
            <p>Department responsible: <span className="text-black-50">{department_title}</span></p>
        </div>
    )
}