
import { useState } from "react"
import { useRouter } from "next/router"

const Searcher = () =>{

    const router = useRouter()

    const [keyword, setKeyword] = useState('')


    const handleSubmit= (e)=> {
        e.preventDefault()
        console.log(keyword)
        console.log(router.asPath)
        router.push(`/collection`)

    }

    const handleChange = e =>{
        setKeyword(e.target.value)
    }


    return(
        <>
        <form onSubmit={handleSubmit} className="input-group mb-3">
            <input onChange={handleChange} value={keyword} type="text" className="form-control" placeholder="Type something" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button  className="btn btn-outline-secondary" type="submit" id="button-addon2"><i className="bi bi-search"></i></button>
        </form>
        </>
    )
}



export default Searcher;