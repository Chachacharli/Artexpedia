
const CardArtwork = ({titulo, fecha, artista, identifier,alt}) =>{
    return(
        
        <div className="col-sm-4">
            <div className="card">
                <img loading="lazy" src={`https://www.artic.edu/iiif/2/${identifier}/full/843,/0/default.jpg`} alt={`${alt}`} />
                <div>
                    <h3>{titulo} - {fecha}</h3>
                    <p>{artista}</p>
                </div>
            </div>
        </div>

    )
}

export default CardArtwork;