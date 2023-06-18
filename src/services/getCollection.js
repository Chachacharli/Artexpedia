
export const getData = (endpoint, page ,query) => {
    const PUBLIC_DOMAIN = '&query[term][is_public_domain]=true'
    return fetch(`https://api.artic.edu/api/v1/${endpoint}/search?q=${query}?&from=${page}&size=12$&fields=id,image_id,title,thumbnail${PUBLIC_DOMAIN}`)
    .then( res => res.json())
    .then(response => (response))
}