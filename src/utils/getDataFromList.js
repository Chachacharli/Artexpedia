export const getDatesFromList = (exhibitions) => {
    let evetns = []
    exhibitions && exhibitions.data.forEach((obj)=> {
        let dates = obj.aic_start_at.slice(0,10).split('-')
        evetns.push(
            {
                year: dates[0],
                month: Number(dates[1]),
                day: dates[2]
            }
        )
    evetns.sort( (a,b) => (a.month - b.month) )
    })

    let hash = {}
    let months = evetns.filter(o => hash[o.month] ? false : hash[o.month] = true )
    months.sort( (a,b)  => (b.month - a.month ))

    return({evetns, months})
}