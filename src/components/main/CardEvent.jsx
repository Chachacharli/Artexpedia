

export const CardEvent = ({img_url, title, place,url}) =>{
    return(
    <a href={url} className="col-md-6">
            <div className="card card-event">
                <div className="img-event-content">
                    <img className="img-event" loading="lazy" src={`${img_url}`} alt={title} />
                </div>
                <div className="info-event-content row">
                    <div className="col card-body">
                        <p className="place-event">{place}</p>
                        <p className="title-event">{title} </p>
                    </div>
                </div>
            </div>
    </a>
    )
}

