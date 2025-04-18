"use client";
import { Grid,Container, Tabs, Tab } from "@mui/material";
import {  useState ,useRef} from "react";
import { Panel } from "./Panel";
import {BusinessInfoSection} from "./BusinessInfoSection";
import { PanelNavigator } from "./PanelNavigator";
import { OwnerInfoSection} from "./OwnerInfoSection"
import { POST } from "@/Utils/Services/HTTP";
import { BodyRequest } from "@/Utils/Services/BodyRequest";
import {fromEvent} from "rxjs"
import { JQueryStyleEventEmitter } from "rxjs/internal/observable/fromEvent";
function FormRegister(){

    const [tabValue,setTabValue] = useState(0);
    const form = useRef<HTMLFormElement>(null)
    const [responseStatus,setResponsestatus] =useState<ResponseStatus>(
        {
            status:null,
            message:null,
        }
    );
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
      };

    const handleClick = ( newValue: number) => {
        setTabValue(newValue);
      };

      /**
       *     const submitionHandle = async (ev:FormEvent)=>{
        ev.preventDefault();
        const formData = new FormData(ev.currentTarget as HTMLFormElement);
        let res = await POST("/api/v1/auth/register",BodyRequest.get(formData),false);

        setResponsestatus(res);      
    }
       */

    fromEvent(form.current as JQueryStyleEventEmitter<any,unknown>,"submit").subscribe

    return (
        <Container>
            <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                <Grid  size={{xs:12 ,md:12, lg:12}} direction={"column"} component={"section"}>
                    
                </Grid>
            </Grid>
            <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"}>
                <Grid>
                    <Tabs value={tabValue} onChange={handleChange} aria-label="Register New Business">
                        <Tab label="Información de Negocio"  disabled ={tabValue !== 0}/>
                        <Tab label="Información de Propietario"  disabled ={tabValue !== 1} />
                    </Tabs>
                </Grid>
                <Grid>
                    <form ref={form}>
                        <Panel index={0} value={tabValue}>
                            <BusinessInfoSection/>
                            <PanelNavigator hasNext={true} hasPrevious={false} next={1} handle={handleClick} submit={false}/>
                        </Panel>

                        <Panel index={1} value={tabValue}>
                            <OwnerInfoSection/>
                            <PanelNavigator hasNext={false} hasPrevious={true} next={null} previous={0} handle={handleClick} submit={true}/>
                        </Panel>
                    </form>
                </Grid>
            </Grid>
        </Container>

    )
}


export {FormRegister}