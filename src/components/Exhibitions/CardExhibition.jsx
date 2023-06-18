import { ErrorDict } from "@/utils/ErrorDict";
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export const CardExhibition = ({img,title,date, dateEnd}) => {
    
    let newDate = date.slice(0,10).split('-')
    let newDateEnd = dateEnd.slice(0,10).split('-')

    let monthStart = month[newDate[1].slice(1)]
    let monthEnd = month[newDateEnd[1].slice(1)]

    return(
        <article className="col-md-12 card-exhibition">
            <div className="row my-2">
                <div className="col-md-4">
                    <img className="w-100" src={ img || ErrorDict.IMAGE_NOT_FOUND.src } alt={`${title}`} />
                </div>
                <div className="col-md-8">
                    <h3>{title}</h3>
                    <p>{`${newDateEnd[0]}`}</p>
                    <p>{`${monthStart} ${newDate[2]}`} - {`${monthEnd} ${newDateEnd[2]}`}</p>
                </div>

            </div>
        </article>  
    )
}