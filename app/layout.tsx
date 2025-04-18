import { GeneralHeader } from "@/AgendateComponents/Headers/GeneralHeader";
import "@/app/globals.css";
import { ThemeProvider } from 'next-themes'
import Head from "next/head";

export default function Layout({children}:{children:React.ReactNode}){
  return (
      <html lang="es" suppressHydrationWarning>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <body className="bg-background dark:bg-background">
          <ThemeProvider>
            <GeneralHeader/>
              {children}
          </ThemeProvider>
            
        </body>
      </html>
  );
}