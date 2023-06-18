

export const getQuery = (path) => {
    console.log(path.split('q=').slice((path.split('q=').length -1 ))[0])
    return path.split('q=').slice((path.split('q=').length -1 ))[0]

}