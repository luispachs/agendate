import { GeneralHeader } from "@/AgendateComponents/Headers/GeneralHeader";
import "@/app/globals.css";
import { ThemeProvider } from 'next-themes'

export default function Layout({children}:{children:React.ReactNode}){
  return (
      <html lang="es" suppressHydrationWarning>
        <body className="bg-background dark:bg-background">
          <ThemeProvider>
            <GeneralHeader/>
              {children}
          </ThemeProvider>
            
        </body>
      </html>
  );
}