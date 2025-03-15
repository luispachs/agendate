import Image from 'next/image'
import icon from "@/assets/images/agendate_logo.png";
import { ThemeSelector } from '../ThemeSelector';
export function GeneralHeader(){
    return <nav className='w-full h-16 md:h-10 lg:h-10 xl:h-10 2xl:h-10 flex flex-column md:flex-row lg:flex-row xl:flex-row justify-center items-center'>
        <div className='w-full md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3 flex flex-row justify-start items-start px-2.5'>
            <Image src={icon.src} alt='Agendate Icon' title='Agendate' width={40} height={40}/>
        </div>
        <div className='w-full md:w-1/3  lg:w-1/3 xl:w-1/3 2xl:w-1/3 flex flex-row justify-center items-center'></div>
        <div className='w-full md:w-1/3  lg:w-1/3 xl:w-1/3 2xl:w-1/3 flex flex-row justify-end items-center px-6'>
            <ThemeSelector/>
        </div>
    </nav>
}