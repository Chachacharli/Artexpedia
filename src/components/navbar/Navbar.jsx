import Link from "next/link";
import Image from "next/image";
import LOGO from '../../../public/assets/ArtexpediaLogo.png'

import { LINKS } from "@/utils/Links";

const ListOfLinks = () =>{
    return(
        <>
            <ul className="list-links">
                    {LINKS.map((link) =>{
                    return <Link key={link.name} href={`${link.link}`} className={"list-group-link fs-4"}> <i className={`${link.icon}`}></i> <span>{link.name}</span>  </Link>                            
                })}
            </ul>        
        </>
    )
}

const Navbar =() =>{
    return(
        <>
        <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark  ">
            <div className="" data-bs-toggle="offcanvas" href="#offcanvasNav" role="button" aria-controls="offcanvasNav">
                <h2 style={{color:'whitesmoke'}} className="mx-5">Artexpedia</h2>
            </div>
        </nav>
         
        <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasNav" aria-labelledby="offcanvasNavLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title fs-2" id="offcanvasExampleLabel">Artexpedia</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">

                <div className="offcanvas-links">
                    <br />
                <ListOfLinks/>
                </div>

            </div>
      </div>
      </>

    )
}


export default Navbar;