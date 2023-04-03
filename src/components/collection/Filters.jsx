
const Filter = ({nombre}) =>{
    return(
        <div className="col-4">
            <input type="checkbox" name="options-outlined" class="btn-check" id={`btn-check-outlined-${nombre}`} autocomplete="off"/>
            <label class="btn btn-outline-primary" for={`btn-check-outlined-${nombre}`}>{nombre}</label>    
        </div>
    )
}


const Filters = () =>{
    return(
        <div className="d-flex">
            <button className="btn " 
            type="button" 
            data-bs-toggle="offcanvas" 
            data-bs-target="#offcanvasScrolling" 
            aria-controls="offcanvasScrolling">
                <span className="mx-2">Filters</span><i class="bi bi-filter-circle-fill"></i>
            </button>

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Secciones de filtros pre-definidos</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <p>Tipos de filtro 1</p>
                <div className="row">
                    <Filter nombre={'Filtro 1'} />
                    <Filter nombre={'Filtro 2'}/>
                </div>


            </div>
            </div>        
        </div>
    )
}

export default Filters;