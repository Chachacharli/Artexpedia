export function getEvents(url){
    fetch(url)
        .then(res => res.json())
        .then(respose =>{ return(respose) })
}