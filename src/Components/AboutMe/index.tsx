import { Grid } from "@material-ui/core";
import styles from "./styles";

const AboutMe = () => {
    const classes = styles()

    return (
        <Grid container className={classes.container}>
            <header id="About-me" className={classes.header}>
                About Me
            </header>
        </Grid>
    )
}

export default AboutMe