import Image from 'next/image'
import icon from "@/assets/images/agendate_logo.png";
import { ThemeSelector } from '../ThemeSelector';
export function GeneralHeader(){
    return <nav className='w-full h-16 md:h-10 lg:h-10 xl:h-10 2xl:h-10 flex flex-column md:flex-row lg:flex-row xl:flex-row justify-center items-center'>
        <div className='w-full md:w-[40%] lg:-[40%] xl:w-[40%] 2xl:w-[40%] flex flex-row justify-start items-start px-2.5'>
            <Image src={icon.src} alt='Agendate Icon' title='Agendate' width={40} height={40}/>
        </div>
        <div className='w-full md:w-[50%]  lg:-[50%] xl:-[50%] 2xl:-[50%] flex flex-row justify-center items-center'>
            <ul className='w-full flex flex-row justify-center items-center md:justify-end lg:justify-end xl:justify-end 2xl:justify-end gap-[10px]'>
                <li>
                    <a>Inicio</a>
                </li>
                <li>
                    <a>Ingresar</a>
                </li>
                <li>
                    <a>Registrate</a>
                </li>
            </ul>
        </div>
        <div className='w-full md:w-[10%]  lg:w-[10%] xl:w-[10%] 2xl:w-[10%] flex flex-row justify-end items-center px-6'>
            <ThemeSelector/>
        </div>
    </nav>
}