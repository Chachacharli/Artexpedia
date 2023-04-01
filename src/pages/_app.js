import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// pages/_app.js
import { Poppins } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})


export default function App({ Component, pageProps }) {
  return( 
  <main className={poppins.className} >
    <Component {...pageProps} />
  </main>
  )
}
