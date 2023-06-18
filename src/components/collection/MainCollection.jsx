
import Filters from "./Filters";
import Searcher from "./Searcher";
import ListOfArtworks from "./ListOfArtworks";
import { HeaderSection } from "../HeaderSections/HeaderSection";


const MainCollection = ({artworks}) =>{
    return(
        <main>  
                <div className="container min-vh-100">
                    <HeaderSection title={'Collections'} text={'Search thousands of artworks through this section using the search bar. Try your favorite artist or style of choice.'}/>
                    <Searcher></Searcher>
                    <ListOfArtworks artworks={artworks}/>

                </div>
                
            </main>
        )
}

export default MainCollection;