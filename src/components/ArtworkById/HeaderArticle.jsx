import { useImage } from "@/Hooks/fetcherImage"
export const HeaderArticle = ({title = 'Nulo ', img, date,  alt}) => {
    const {image} = useImage(img)
    return(
        <article className="p-3 mb-2 bg-secondary-subtle text-emphasis-secondary">
            <section className="container my-4 d-flex flex-column justify-content-center align-items-center">
                <figure className="image-id-container">
                    <img className="" loading="lazy" src={image} alt={alt} />
                </figure>
                <h2 className="container w-auto">
                    {title}
                </h2>
                <small className='fs-5 text-secondary'>
                    {date}
                </small>
            </section>
        </article>
    )
}