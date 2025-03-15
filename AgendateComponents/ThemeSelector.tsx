"use client";
import { useTheme } from "next-themes"

export function  ThemeSelector(){
    const {theme,setTheme} = useTheme()
    return (
        <div className="w-full md:w-8 lg:w-8 xl:w-8 2xl:w-8 flex flex-row justify-center items-center md:justify-end md:items-end lg:items-end lg:justify-end xl:items-end xl:justify-end 2xl:items-end 2xl:justify-end">
             <button name="themeSelector" onClick={()=>{
                    if(theme=="dark"){
                        setTheme("light");
                    }else{
                        setTheme("dark");
                    }
               }} className="bg-background text-foreground border-foreground border-2 rounded-sm">Tema</button> 
        </div>
    )
}