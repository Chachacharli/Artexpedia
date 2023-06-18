export const ListNotFound = () =>{
    return(
        <div className="w-100 d-flex align-items-center justify-content-center flex-column tetet"> 
            <i style={{color: '#002021'}} className="bi bi-emoji-frown-fill fs-1"></i>
            <h3>Sorry nothing could be found !</h3>
            <small>Try typing again.</small>
        </div>
    )
}