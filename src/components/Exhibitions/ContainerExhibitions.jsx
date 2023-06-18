import { CardExhibition } from "./CardExhibition"
import { ListExhibitions } from "./ListOfExhibitions";
import { AsideExhibitions } from "./AsideExhibitions";

export const ContainerExhibitions = ({exhibitions, dates})=> {
    return(
        
            <section>
                {dates && dates.months.map((obj)=>{
                    return(
                        <section key={`${ obj.day }`} className="row">
                            <AsideExhibitions obj={obj} />
                            <ListExhibitions obj={obj.month} exhibitions={exhibitions}/>
                        </section>
                    )
                })}
            </section>
    )
}