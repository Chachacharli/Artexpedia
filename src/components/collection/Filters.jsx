


const SingleFilter = ({name}) =>{
    <>
            <input type="checkbox" className="btn-check" id="btn-check-outlined" autoComplete="off"/>
            <label className="btn btn-outline-primary" htmlFor="btn-check-outlined">{name}</label>    
    </>
} 

const BtnFilters = () =>{
    return(
        <div className="d-flex">
            <button className="btn " 
            type="button"
            data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> 
                <span className="mx-2">Filters</span><i className="bi bi-filter-circle-fill"></i>
            </button>
        </div>
    )
}


const CollapseFilters = () =>{
    return(
        <div className="collapse px-4" id="collapseExample">
            <input type="checkbox" className="btn-check" id="btn-check-outlined" autoComplete="off"/>
            <label className="btn btn-outline-primary" htmlFor="btn-check-outlined">Filtro</label>
         </div>
    )
}


const Filters = () =>{
    return(
        <>
            <BtnFilters></BtnFilters>
            <CollapseFilters></CollapseFilters>
   
        </>
    )
}

export default Filters;