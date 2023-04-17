
import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar"

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const CardExhibition = ({img,title,date, dateEnd}) => {
    
    let newDate = date.slice(0,10).split('-')
    let newDateEnd = dateEnd.slice(0,10).split('-')

    let monthStart = month[newDate[1].slice(1)]
    let monthEnd = month[newDateEnd[1].slice(1)]

    return(
        <div className="col-md-6">
        <div className="card my-2">
            <img src={`${img}`} alt="" />
            <h3>{title}</h3>
            <p>{`${monthStart} ${newDate[2]}`} - {`${monthEnd} ${newDateEnd[2]} ${newDateEnd[0]}`}</p>
        </div>
        </div>  
    )
}


const ListExhibitions = ({exhibitions})=> {
    return(
            <div className="row">
            {exhibitions && exhibitions.data.map((exp) => {
                return <CardExhibition key={exp.data} img={exp.image_url} title={exp.title} date={exp.aic_start_at} dateEnd={exp.aic_end_at}/>
            })}            
            </div>
    )
}

const Exhibitions= () => {

    const [exhibitions, setExhibitions] = useState();
    useEffect(() => {
        fetch('https://api.artic.edu/api/v1/exhibitions?page=1&limit=6')
        .then(res => res.json())
        .then(response => setExhibitions(response))
    })

    return(
        <section className="min-vh-100 container">
        <h1>Exhibitons</h1><hr />
        <ListExhibitions exhibitions={exhibitions}/>

        </section>
    )
}

export default Exhibitions;