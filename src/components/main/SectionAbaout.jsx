import Image from "next/image"

const RowDevelop = () =>{
    return(
    <div className="row container-about">
        <div className="col-md-12 d-flex justify-content-center align-items-center my-5">
            <p className="text-about">You can find more information about the development in:</p>
        </div>
        <div className="col-md-12 d-flex justify-content-center align-items-center">
            <div className="row w-100 d-flex justify-content-evenly align-items-center">
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center" >
                    <a href="https://github.com/Chachacharli" className="m-0"> <i id="github-icon" class="bi bi-github"></i></a>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <a href="https://vortex-dev.vercel.app/" className="m-0"> <Image id="VortexDev" src={'/assets/logo5.png'} width={150} height={150} alt={'VortexDev'}></Image> </a>
                </div>
            </div>
        </div>
    </div>
    )
}

const RowComeFrom = () =>{
    return(
    <div className="row container-about">
        <div className="col-md-6 d-flex justify-content-center align-items-center p-5">
            <p className="text-about">All the information and images of Artexpedia are provided thanks to the API of the Art Institute of Chicago, you can visit the official page of the Institute <a rel='noreferrer' target='_blank' href="https://www.artic.edu/">here</a> and the API <a href="https://api.artic.edu/docs/">here</a>  .</p>

        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center p-5">
            <Image className="image-about" width={200} height={200} src={'/assets/art-i.jpg'} alt={'The Art Institute of Chicago'}></Image>
        </div>
    </div>
    )
}

const RowAbout = () =>{
    return(
    <div className="row container-about">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
            <Image className="image-about" width={200} height={200} src={'/assets/art-i-logo.png'} alt={'The Art Institute of Chicago logo'}></Image>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center p-5">
            <p className="text-about">Artexpedia is a website with varied information on artworks and art exhibitions. A site where you can easily find information about your favorite works in the public domain.</p>
        </div>
    </div>
    )
}

const SectionAbaout = () =>{
    return(
        <section id="WhatIs" className="min-vh-100">
            <div className="container conatiner-all-about">
                <h3 className="header-about">What is Artexpedia?</h3>
                <RowAbout/>
                <RowComeFrom/>
                <RowDevelop/>
            </div>
        </section>
    )
}

export default SectionAbaout;