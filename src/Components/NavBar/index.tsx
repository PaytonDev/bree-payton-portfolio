import { Grid, Container} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn"
import NavLink from "./NavLinks";
import styles from "./styles";

const NavBar = () => {
    const links = [
        {
            text: "Home",
            url: "#Home"
        },
        {
            text: "Projects",
            url: "#Projects"
        },
        {
            text: "Skills",
            url: "#Skills"
        },
        {
            text: "Contact",
            url: "#Contact"
        },
    ]

    
    const navLinks = links.map((link, idx) => (
        <NavLink text={link.text} url={link.url} key={idx}/>
    ))

   
    const classes = styles()

    return (


        <section id="NavBar" className={classes.navbarSection}>
            <Container>
                <Grid container justifyContent="space-between" alignContent="center">
                    {navLinks}
                <Grid item>
                    <Grid container>
                        <Grid item>
                            <LocationOnIcon className={classes.location} /> 
                        </Grid>
                        <Grid item>
                            <span className={classes.links}>Tulsa, OK</span>
                        </Grid>
                    </Grid>
                </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default NavBar