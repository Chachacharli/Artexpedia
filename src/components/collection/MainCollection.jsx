
import Filters from "./Filters";
import Searcher from "./Searcher";
import ListOfArtworks from "./ListOfArtworks";

const MainCollection = ({artworks}) =>{
    return(
        <main>  
                <div className="container">
                    <br />
                    <h1>Collection</h1>
                    <hr />
                    <p className="fs-3" style={{color: 'rgba(98, 91, 113, 1)'}}>Search thousands of artworks through this section using the search bar. Try your favorite artist or style of choice.</p>
                    <Searcher></Searcher>
                    <Filters></Filters>
                    <br />
                    <ListOfArtworks artworks={artworks}/>

                </div>
                
            </main>
        )
}

export default MainCollection;