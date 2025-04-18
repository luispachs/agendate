"use client";
import { Grid,Container, Tabs, Tab,Box,Typography } from "@mui/material";
import {  useState , FormEvent} from "react";
import { Panel } from "./Panel";
import {BusinessInfoSection} from "./BusinessInfoSection";
import { PanelNavigator } from "./PanelNavigator";
import { OwnerInfoSection} from "./OwnerInfoSection"
import { POST } from "@/Utils/Services/HTTP";
import { BodyRequest } from "@/Utils/Services/BodyRequest";
import { redirect } from "next/navigation";
import { green,red } from '@mui/material/colors';
function FormRegister(){

    const [tabValue,setTabValue] = useState(0);
    
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

    const submitionHandle = async (ev:FormEvent)=>{
        ev.preventDefault();
        const formData = new FormData(ev.currentTarget as HTMLFormElement);
        let res = await POST("/api/v1/auth/register",BodyRequest.get(formData),false);

        setResponsestatus(res);
        if(res.status == 200){
            setTimeout(()=>{
                redirect("/login")
            }),
            1500
        }
    }
       
  

    return (
        <Container>
            <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                <Grid  size={{xs:12 ,md:12, lg:12}} direction={"column"} component={"section"}>
                    {(responseStatus.status !==null) &&
                        <Box sx={{width:"100%", padding:2, backgroundColor: (responseStatus.status ==200) ? green[200] : red[200] ,borderRadius:2}}> 
                            <Typography variant="subtitle2" sx={{color:  (responseStatus.status ==200) ? green[800] : red[800]}}>
                                {responseStatus.message}
                            </Typography>
                        </Box>
                    }
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
                    <form onSubmit={submitionHandle}>
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