import Link from "next/link";

const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-bg">
            <div className="container-fluid">
            <div class="bd-navbar-toggle"><button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="bi" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path></svg><span className="d-none fs-6 pe-1">Browse</span></button></div>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav text-light w-100 d-flex justify-content-around">
                    <Link href={`/`} className="nav-link text-light " aria-current="page">Home</Link>
                    <a className="nav-link text-light" href="#">Features</a>
                    <a className="nav-link text-light" href="#" >Pricing</a>
                    <a className="nav-link text-light" href="#">Disabled</a>
                </div>  
                </div>
            </div>
            </nav>
    )
}

export default Navbar;