import { FooterLink } from "./FooterLink"
import { LINKS } from "@/utils/Links"

export const ListOfFooterLinks = () =>{
    return(
        <>
            {LINKS.map((link) => {
                return(
                    <FooterLink key={link.name} url={link.link} name={link.name} />
                )
            })}
        </>
    )
}
