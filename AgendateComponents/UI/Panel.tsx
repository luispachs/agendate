import { Grid } from "@mui/material"
function Panel (props:PanelTypes){
    return (
        <Grid direction="column" role="tabpanel" hidden={props.value !== props.index} id={`tab-${props.index}`} aria-labelledby={`tab-${props.index}`} sx={{padding:2}}>
            {props.children}
        </Grid>
    )
}


export {Panel};