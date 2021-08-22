import { makeStyles } from "@material-ui/core"
import "animate.css"

const styles = makeStyles({
    navbarSection: {
        paddingTop: "3vh",
        marginBottom: "3vh",
        animation: "fadeIn",
        animationDuration: "1.5s"
    },
    links: {
        fontSize: 20,
        color: '#d6d3d3',
        fontWeight: 200,
    },
    location: {
        marginRight: 5
    }
})

export default styles