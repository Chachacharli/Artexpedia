export const Pill = ({obj, idx}) =>{
    if(idx == 0) {
    return(
            <li class="nav-item" role="presentation">
                <button class="nav-link active" 
                id="pills-home-tab" 
                data-bs-toggle="pill" 
                data-bs-target= {`#${obj.target}`} 
                type="button" role="tab" 
                aria-controls="pills-home"
                aria-selected="true">
                    {obj.title}
                </button>
            </li>  
        )
    }else{
        return(
            <li class="nav-item" role="presentation">
            <button class="nav-link " 
            id="pills-home-tab" 
            data-bs-toggle="pill" 
            data-bs-target= {`#${obj.target}`} 
            type="button" role="tab" 
            aria-controls="pills-home"
            aria-selected="true">
                {obj.title}
            </button>
        </li>              
        )

    }

}