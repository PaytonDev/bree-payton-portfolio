import { Grid, Link } from "@material-ui/core";
import styles from "./styles"


type NavLinksProps = {
    text: string
    url: string
}

const NavLink = (props: NavLinksProps) => {
    const scrollToView = (name: string) => (
        document.querySelector(`#${name}`)?.scrollIntoView({
            behavior: 'smooth'
        })
    )

    const classes = styles()

    return (
        <Grid item>
            <Link href={props.url} 
                className={classes.links}
                onClick={() => {scrollToView(props.text)}}>
                {props.text}
            </Link>
        </Grid>
    )
}

export default NavLink