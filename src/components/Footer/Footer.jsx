import { Group1 } from "../SVG/Group1";
import { useHover } from "@/Hooks/useFooter";

import { ListOfFooterLinks } from "./ListOfFooterLinks";




const Footer = () =>{

    const isHovered = useHover('#logo-svg')

    return(
        <footer className="py-3">
            <nav className="row border-top my-5 py-5 mb-3 d-flex justify-content-around ">
                <a href="https://vortex-dev.vercel.app/" id="logo-svg" className="col-md-3 d-flex align-items-center justify-content-center vortex-footer ">
                    <Group1 width={50} height={56} fill={ isHovered ? '#19686A' : '#002021'}/> <span className="mx-2">VortexDev</span>
                </a>  
                <div className="col-md-8 my-2 px-5 align-items-center justfy-content-center">
                    <ul className="row  d-flex align-items-center justfy-content-center nav gap-5">
                        <ListOfFooterLinks/>    
                    </ul>
                </div>                
            </nav>
           
            <p className="text-center text-muted">© 2023 Artexpedia</p>
        </footer>
        )
}

export default Footer;