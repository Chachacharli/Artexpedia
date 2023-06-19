export const HeaderArtist = ({tittle, place_origin, date_start, date_end}) => {
    return(
        <div>
            <p className="fs-5">{tittle}</p>
            <p className="text-secondary">{place_origin} {date_start} - {date_end}</p>
        </div>
    )
}
