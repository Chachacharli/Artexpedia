
export const DataTableArtwork = ({data}) => {
    return(
        <div className="my-5 col-md-4">
        <table className="table">
            <tbody>
                <tr>
                    <th scope="row">Department</th>
                    <td>{data.data.department_title}</td>
                </tr>
                <tr>
                    <th scope="row">Artist</th>
                    <td>{data.data.artist_title}</td>
                </tr>
                <tr>
                    <th scope="row">Title</th>
                    <td>{data.data.title}</td>
                </tr>                                        
                <tr>
                    <th scope="row">Place of origin </th>
                    <td>{data.data.place_of_origin}</td>
                </tr>
                <tr>
                    <th scope="row">Date  </th>
                    <td>{data.data.date_start}</td>
                </tr>       
                <tr>
                    <th scope="row">Medium  </th>
                    <td>{data.data.medium_display}</td>
                </tr>  
                <tr>
                    <th scope="row">Dimensions  </th>
                    <td>{data.data.dimensions}</td>
                </tr>  
                <tr>
                    <th scope="row">Credit line </th>
                    <td>{data.data.credit_line}</td>
                </tr>             
                <tr>
                    <th scope="row">Reference Number</th>
                    <td>{data.data.main_reference_number}</td>
                </tr>                                                                                                            
           
            </tbody>
        </table>
    </div>        
    )
}
