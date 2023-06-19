import Spiner from "../Spiner/Spiner"
import { useRouter } from 'next/router';
import { useEffect } from 'react';


export function DailyArtwork(){

    const router = useRouter();

    const randomNumber = Math.floor(Math.random() * 119797) + 1;

    useEffect(() => {
        router.replace(`/collection/${randomNumber}`);
      }, []);
    

    return(
        <section className="min-vh-100">
            <Spiner></Spiner>
        </section>
    )
}