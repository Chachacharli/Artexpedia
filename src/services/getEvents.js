export function getEvents(url){
    return fetch(url)
        .then(res => res.json())
        .then(respose =>{ return(respose) })
}