import { useEffect, useState } from "react";

export const useHover = (elem) => {
    const [isHovered, setHover] = useState(false)
    useEffect(()=>{
        const logoSVG = document.querySelector(elem)
        logoSVG.addEventListener('mouseover', (e)=> {
            setHover(true)
        })
        logoSVG.addEventListener('mouseout', (e)=> {
            setHover(false)
        })        

    },[])

    return isHovered;
}
