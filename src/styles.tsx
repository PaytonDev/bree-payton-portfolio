import { makeStyles } from "@material-ui/styles";

const styles = makeStyles({
    fab: {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
        opacity: 1,
        transition: "opacity 1s ease-in-out"
    },
    fabIcon: {
        color: "black"
    },
    hidden: {
        opacity: 0
    },
})

export default styles