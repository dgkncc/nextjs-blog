import Image from 'next/image'

import dog1 from './../../public/images/dog1.jpeg'
import dog2 from './../../public/images/dog2.jpeg'
import cat1 from './../../public/images/cat1.jpeg'
import cat2 from './../../public/images/cat2.jpeg'
import H1 from '@/components/h1'

export const metadata = {
    title: 'Photos'
}

export default function PhotosPage() {
    return (
        <div>
            <H1>Some Photos</H1>
            <div className="grid grid-cols-2 gap-4">
                <div className="relative h-72 overflow-hidden">
                    <Image fill src={dog1} className="object-cover w-full h-full" alt="Picture of my dog" 
                    sizes='(max-width: 768) 100vw, 50vw' priority={true} quality={50} placeholder='blur'/>
                </div>
                <div className="relative h-72 overflow-hidden">
                    <Image fill src={dog2} className="object-cover w-full h-full" alt="Picture of my dog" 
                    sizes='(max-width: 768) 100vw, 50vw' priority={true} quality={50} placeholder='blur'/>
                </div>
                <div className="relative h-72 overflow-hidden">
                    <Image fill src={cat1} className="object-cover w-full h-full" alt="Picture of my dog" 
                    sizes='(max-width: 768) 100vw, 50vw' quality={50} placeholder='blur'/>
                </div>
                <div className="relative h-72 overflow-hidden">
                    <Image fill src={cat2} className="object-cover w-full h-full" alt="Picture of my dog" 
                    sizes='(max-width: 768) 100vw, 50vw' quality={50} placeholder='blur'/>
                </div>

            </div>
        </div>
    )
}