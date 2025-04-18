const { Grid,TextField } = require("@mui/material");

function OwnerInfoSection(){
    return (
        <Grid container columns={12}>
                <Grid item  sx={{padding:2}} size={{xs:12,md:12,lg:6}}>
                    <TextField fullWidth label="Nombre del Propietario" placeholder="Nombre del Propietario" name="ownerName" id="ownerName" type="text"/>
                </Grid>
                <Grid item  sx={{padding:2}} size={{xs:12,md:12,lg:6}}>
                    <TextField fullWidth label="Apellido del Propietario" placeholder="Apellido del Propietario" name="ownerLastname" id="ownerLastname" type="text"/>
                </Grid>
                <Grid item  sx={{padding:2}} size={{xs:12,md:12,lg:6}}>
                    <TextField fullWidth label="Email del Propietario" placeholder="Email del Propietario" name="ownerEmail" id="ownerEmail" type="text"/>
                </Grid>
                <Grid item  sx={{padding:2}} size={{xs:12,md:12,lg:6}}>
                    <TextField fullWidth label="Telefono del Propietario" placeholder="Telefono del Propietario" name="ownerPhone" id="ownerPhone" type="phone"/>
                </Grid>
                <Grid item  sx={{padding:2}} size={{xs:12,md:12,lg:6}}>
                    <TextField fullWidth label="Contraseña del Propietario" placeholder="Contraseña del Propietario" name="ownerPassword" id="ownerPassword" type="password"/>
                </Grid>
                <Grid item  sx={{padding:2}} size={{xs:12,md:12,lg:6}}>
                    <TextField fullWidth label="Repite Contraseña del Propietario" placeholder="Repite Contraseña del Propietario" name="repeatOwnerPassword" id="repeatOwnerPassword" type="password"/>
                </Grid>

        </Grid>
    )
}

export {OwnerInfoSection}