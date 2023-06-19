import Navbar from "../navbar/Navbar";
import MainCollection from "./MainCollection";
import Footer from "../Footer/Footer";
import Spiner from "../Spiner/Spiner";
import { useArtworks } from "@/Hooks/UseArtworks";
import React, { useEffect, useState, useRef } from "react";
const ENDPOINT = 'artworks'


const Pagination = ({actualPage, handlePagination, nextPage, previousPage , artworks}) => {

    console.log(artworks && artworks.pagination)
    return(
        <nav style={{marginTop: '50px'}} className="d-flex align-items-center justify-content-center" aria-label="Page navigation example">
        <ul className="pagination">
            <li className="page-item"><button onClick={previousPage} className="page-link" href="#"> Previous Page</button></li>
            <li className="page-item"><p className="page-link" href="#">{actualPage}</p></li>
            <li className="page-item"><button onClick={nextPage} className="page-link" href="#"> Next page </button></li>
        </ul>
        </nav>        
    )
}



const Collection = () => {

    // const elementRef = useRef(null)
    const {artworks, loading, page, actualPage, setNewPage, setPage} = useArtworks(ENDPOINT)
    


    const nextPage = () => {
        setPage( page + 11)
        setNewPage(actualPage +1)
    }
    const previousPage = () => {
        if(page > 1 ){
            setPage( page - 11)
            setNewPage(actualPage - 1)
        }
    }

    return(
        <>
            {loading ? <Spiner/> : <MainCollection artworks={artworks}/>} 
            <Pagination artworks={artworks} actualPage={actualPage}  nextPage={nextPage} previousPage={previousPage} />
        </>
    )
}

export default Collection;