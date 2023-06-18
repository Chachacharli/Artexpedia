import { CardExhibition } from "./CardExhibition";

export const ListExhibitions = ({exhibitions, obj}) =>{
    return(
        <div className="col-8 py-3">
            {exhibitions && exhibitions.data.map((exp) => {                             
                return <div key={exp.aic_start_at.slice(0,10)}> {Number(exp.aic_start_at.slice(0,10).split('-')[1]) === obj ?  <CardExhibition key={exp.data} img={exp.image_url} title={exp.title} date={exp.aic_start_at} dateEnd={exp.aic_end_at}/>  : <></>} </div>
            })}   
        </div>
    )
}