
const API_URL = 'https://api.artic.edu/api/v1/artworks/'



export default function getDailyArtwork(){
    const date = new Date()
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let id_day = `${day}${month}${year}`

    let random = Math.sin(id_day) * 10000;
    let n2 = Math.floor((random - Math.floor(random)) * 129884) + 1;

    return fetch(`${API_URL}${n2}`)
    .then(res => res.json())
    .then(response => { return response} )

}