import SectionMenu from '@/components/main/SectionMenu'
import SectionEvents from '@/components/main/SectionEvents'
import Landing from '@/components/main/Landing'
import SectionAbaout from '@/components/main/SectionAbaout'
import Footer from '@/components/Footer/Footer'

const Main = () =>{
    return(
        <>
            <Landing></Landing>
            <SectionMenu></SectionMenu>
            <SectionEvents></SectionEvents>
            <SectionAbaout></SectionAbaout>
            <Footer></Footer>
        </>
    )
}

export default Main;