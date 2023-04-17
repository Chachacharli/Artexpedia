
const API_URL = 'https://api.artic.edu/api/v1/artworks/'

export default function getDailyArtwork(){
    const date = new Date()
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let id_day = `${day}${month}${year}`

    console.log(id_day)

    return fetch(`${API_URL}${129884}`)
    .then(res => res.json())
    .then(response => { return response} )

}