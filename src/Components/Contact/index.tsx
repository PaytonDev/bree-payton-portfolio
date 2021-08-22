import { Grid, Box } from "@material-ui/core"
import ContactForm from "./ContactForm"
import styles from './styles'

const Contact = () => {
    const classes = styles()

    return (
        <section id="Contact" className={classes.formContainer}>
            <header className={classes.header}>
                Contact
            </header>
   
            <Grid container item justifyContent='center' alignItems="center">
                <Grid item xs={5}>
                    <Box className={classes.contactCTA}>
                        What Can I Do For You? <br/> <br/><span className={classes.contactEmoji}>😊</span>
                    </Box>
                </Grid>
                <Grid item> 
                    <ContactForm />
                </Grid>
            </Grid>

        </section>
    )
}

export default Contact