import { Button, Grid } from "@mui/material"

function PanelNavigator(props: PanelNavigatorTypes){
    return (
        <Grid container direction={"row"} sx={{padding:3, justifyContent:"center", alignItems:"center"}} > 
            {props.hasPrevious && <Button variant="contained"  onClick={()=>{props.handle(props.previous!)}} sx={{margin:2}}>Anterior</Button>}
            {props.hasNext && <Button variant="contained" onClick={()=>{props.handle(props.next!)}} sx={{margin:2}}>Siguiente</Button>}
        
            {props.submit && <Button variant="contained" type="submit" sx={{margin:2}}>Enviar</Button>}
       </Grid>
    )
}

export {PanelNavigator}