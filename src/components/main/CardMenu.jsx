import Link from "next/link"

const CardMenu = ( {icon, title, subtitle, url} ) =>{
    return(
  
      <Link href={`/${url}`} style={{width:'300px'}} className="col-md-12"> 
        <div className="card-menu card d-flex flex-column justify-content-center align-items-center">
            <div style={{backgroundColor:'#19686A'}} className="icon-container p-3">
                <i className={`bi ${icon}`}></i>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h4 className='header-card-menu'> {title} </h4>
                <p className='subtitle-card-menu'> {subtitle} </p>
            </div>
        </div>
    </Link>
    )
  }
  
export default CardMenu