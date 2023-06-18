export const HeaderSection = ({title, text}) => {
    return(
        <section className="my-5">
            <h1>{title}</h1>
            <hr />
            <p className="fs-3" style={{color: 'rgba(98, 91, 113, 1)'}}>
                {text}    
            </p>
        </section>
    )
}

