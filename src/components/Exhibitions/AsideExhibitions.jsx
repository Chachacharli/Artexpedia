export const AsideExhibitions = ({obj}) => {
    const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    return(
        <aside className="col-4">
            <hr />
            <p className="fs-4"> { MONTHS[obj.month] } </p>
        </aside >        
    )

}