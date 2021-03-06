import { makeStyles} from "@material-ui/core";

const styles = makeStyles({
    formContainer: {
        height: "100vh",
    },
    header: {
        fontSize: 48,
        fontWeight: 700,
        marginTop: "10vh",
        marginBottom: "10vh",
    },
    contactCTA: {
        fontSize: 32,
        margin: 30,
    },
    contactEmoji: {
        fontSize: 76
    },
    mailIcon: {
        margin: 'auto 0',
        display: "flex"
    },
    text: {
        textAlign: 'center',
    },
    email: {
        marginLeft: 15,
        fontSize: 22
    }
})

export default styles