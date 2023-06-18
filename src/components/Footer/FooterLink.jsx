import Link from "next/link";

export const FooterLink = ({name, url}) => {
    return(
        <li className="nav-item col "><Link href={`${url}`} className="nav-link p-0 text-muted">{name}</Link></li>
    )
}