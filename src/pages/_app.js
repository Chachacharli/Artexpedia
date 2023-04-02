import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { Poppins } from 'next/font/google'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'



// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

function Loading(){
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    const handleStart = (url) => (url !== router.asPath) && setLoading(true) 
    const handleComplete = (url) => (url !== router.asPath) && setTimeout(()=> {setLoading(false)},1000)
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)
    return( ) =>{
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }

  })
  return loading && (
    <div>
      <h2> CARGARNDO </h2>
    </div>
  )
}

export default function App({ Component, pageProps }) {
  return( 
  <main className={poppins.className} >
    <><Component {...pageProps} /></>  
  </main>
  )
}
