
import Image from 'next/image'
import  hero1  from '../../images/toni-cuenca-3H9MwhuifgY-unsplash.jpg'
export default function Carousel(){
    return(
        <>
        <div>
            <Image
            src= {hero1}
            alt='Hero1'
            className='h-[400px] object-cover'
            ></Image>
        </div>
        </>
    )
}