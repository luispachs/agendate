import { Grid,TextField } from "@mui/material"


function BusinessInfoSection(){
    return (
        <>
            <Grid container columns={12}>
                <Grid item  sx={{padding:2}} size={{xs:12,md:12,lg:6}}>
                    <TextField fullWidth label="Nombre de Negocio" placeholder="Nombre de Negocio" name="businessName" id="businessName" type="text"/>
                </Grid>
                <Grid item sx={{padding:2}}  size={{xs:12,md:12,lg:6}}>
                    <TextField fullWidth label="Dirección de Negocio" placeholder="Dirección de Negocio"  name="businessAddress" id="businessAddress" type="text"/>
                </Grid>
                <Grid item sx={{padding:2}}  size={{xs:12,md:12,lg:12}}>
                    <TextField fullWidth label="Telefono de Negocio" placeholder="Telefono de Negocio"  name="businessPhone" id="businessPhone" type="phone"/>
                </Grid>
            </Grid>
        </>
    )
}

export {BusinessInfoSection}