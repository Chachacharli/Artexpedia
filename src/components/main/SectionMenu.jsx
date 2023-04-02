import CardMenu  from '@/components/main/CardMenu'

const SectionMenu = ()=>{
    return(
        
      <section style={{backgroundColor:'#002021', marginTop: '-60px'}} className='min-vh-100 d-flex justify-content-center align-items-center'>

      <div className='container flex-column w-100 h-100 d-flex justify-content-evenly align-items-center'>

        <div className="row d-flex justify-content-center align-items-center">

            <CardMenu url={'daily-artwork'} icon={'bi-brightness-high-fill'} title={'daily artwork'} subtitle={'A daily artwork'} ></CardMenu>
            <CardMenu url={'collection'} icon={'bi-brush-fill'} title={'collection'} subtitle={'All the artworks '}></CardMenu>
            <CardMenu url={'exhibitions'} icon={'bi-columns-gap'} title={'exhibitions'} subtitle={'Where i can find it?'}></CardMenu>
            <CardMenu url={'highlights'} icon={'bi-stars'} title={'highlights'} subtitle={'Trending now'}></CardMenu>



        </div>
      </div>


  </section>
    )
}

export default SectionMenu