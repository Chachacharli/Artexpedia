
import { useEffect, useState } from "react";
import { HeaderSection } from "../HeaderSections/HeaderSection";
import { ContainerExhibitions } from "./ContainerExhibitions";
import { getDatesFromList } from "@/utils/getDataFromList";



const Exhibitions = () => {

    const [exhibitions, setExhibitions] = useState();
    const [dates, setDates] = useState()

    useEffect(() => {
        fetch('https://api.artic.edu/api/v1/exhibitions?page=1&limit=8')
        .then(res => res.json())
        .then(response => {
            setExhibitions(response)
            setDates(getDatesFromList(response))
            }
        )
        
    },[])

    return(
   
        <main className="min-vh-100 container">
            <HeaderSection title={'Exhibitons'} text={'Explore our wide-ranging exhibitions along with a variety of virtual and on-site programs.'} />
            <ContainerExhibitions dates={dates} exhibitions={exhibitions}/>
        </main>
    )
}

export default Exhibitions;