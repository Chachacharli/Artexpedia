export const DailyArtworkImage = ({image_id,alt_text}) => {
    return(
        <img style={{width: '100%'}} src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`} alt={`${alt_text}`} />

    )
}