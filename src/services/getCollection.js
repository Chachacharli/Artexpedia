
const API_URL_ARTWORKS_INITIAL = `https://api.artic.edu/api/v1/artworks?page=2&limit=10`     

export const getCollection = (router)=>{
    if(router.asPath === '/collection'){
        return fetch(API_URL_ARTWORKS_INITIAL).
        then(res => res.json())
        .then(response => {return(response)} )
    }else{
        return fetch(`https://api.artic.edu/api/v1/artworks/search?q=${router.asPath.split('q=').slice((router.asPath.split('q=').length -1 ))[0]}&fields=id,image_id,title,thumbnail
        `).
        then(res => res.json())
        .then(response => {return(response)})
    
    }
}