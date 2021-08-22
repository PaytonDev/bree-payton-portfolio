import { Grid, Button, Box } from "@material-ui/core"
import styles from "./styles"

type ProjectRowProps = {
    heading: string
    demoGif: string
    stack: string
    desc: string
    projectUrl: string
    githubUrl: string
}

const ProjectRow = (props: ProjectRowProps) => {
    const classes = styles()

    return (
        <Grid container item xs={6} className={classes.container}>
            <Grid container item className={classes.demoGifContainer} justifyContent="center" alignContent="center">
                <Grid item >
                    <img src={props.demoGif} alt={`${props.heading} demo gif`} className={classes.img}/>
                </Grid>
            </Grid>
            <Grid container item justifyContent="flex-start" >
                <Grid item xs={12} className={classes.descContainer}>
                    <header className={classes.heading}>
                        {props.heading}
                    </header>
                    <small className={classes.stack}>
                        {props.stack}
                    </small>
                    <Box className={classes.desc}>
                        {props.desc}
                    </Box>
                <Grid item container className={classes.buttonArea} justifyContent="space-around" >
                    <Button href={props.githubUrl} className={props.githubUrl ==="#" ? classes.hidden : classes.button} variant="outlined" size="large">
                        See Code
                    </Button>
                    <Button href={props.projectUrl} className={props.projectUrl ==="#" ? classes.hidden : classes.button} variant="outlined" size="large">
                        See Project
                    </Button>
                </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ProjectRow