
import { useState } from "react"
import { useRouter } from "next/router"

const Searcher = () =>{

    const route = useRouter()
    const [keyword, setKeyword] = useState('')


    const handleSubmit= (e)=> {
        e.preventDefault()
        route.push(`/collection?q=${keyword}`)


    }

    const handleChange = e =>{
        setKeyword(e.target.value)

    }


    return(
        <>
        <form onSubmit={handleSubmit} className="input-group mb-3 my-5">
            <input onChange={handleChange} value={keyword} type="text" className="form-control" placeholder="Type something" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button  className="btn btn-outline-secondary" type="submit" id="button-addon2"><i className="bi bi-search"></i></button>
        </form>
        </>
    )
}



export default Searcher;