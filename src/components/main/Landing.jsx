import Image from "next/image"

const Landing = () =>{
    return(
        <main className='min-vh-100'>
            <div style={{zIndex:'2'}} className='container-fluid d-flex flex-column justify-content-center align-items-center my-5 position-absolute'> 
                <div className=" w-100 d-flex justify-content-center align-items-center">
                    <Image src={'/assets/ArtexpediaLogo.png'} width={150} height={150} alt={'Artexpedia logo'}></Image>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center my-5">
                    <h1 style={{color: '#002021', fontSize: '50px', fontWeight: 'bold'}}>Artexpedia</h1>
                    <p className='text-center fs-1 my-2'>Access to artworks, easy, fast and user friendly.</p>
                    <p style={{color:'#625B71', fontSize:'15px'}} className='text-center my-2 '>Brought to you by the Art Institute of Chicago API.</p>
                </div>
              
                <div className='w-100 d-flex d-flex justify-content-center'>
                  <a  href="#WhatIs"className="btn btn-whatis">What is Artexpedia?</a>
                </div>
                
  
            </div>
            <div id="bottom-landing"  style={{position: 'absolute', bottom: '0', left:'0', width:'100%' ,height:'100vh'}} className="d-flex d-flex align-items-end">
              
            </div>
  
      </main>
    )
  }

  export default Landing;


  