import { makeStyles } from "@material-ui/styles";

const styles = makeStyles({
    container: {
        textAlign: "start",
        maxWidth: "95vw",
        minHeight: "30vh",
        
        padding: 25,
    },
    demoGifContainer: {
        
        minWidth: 400,
        background: "rgba(214, 211, 211, 0.1)",
    },
    demoGif: {
        textAlign: "center"
    },
    img: {
        maxHeight: 200,
    },
    descContainer: {
        borderRight:"solid 1px rgba(214, 211, 211, 0.2)",
        borderBottom:"solid 1px rgba(214, 211, 211, 0.2)",
        borderLeft:"solid 1px rgba(214, 211, 211, 0.2)",
        padding: 10,
    },
    url: {

    },
    heading: {
        fontSize: 32,
    },
    desc: {
        minHeight: 50,
        marginTop: 20,
    },
    stack: {
    
    },
    buttonArea: {
        margin: 15
    },
    button: {
        color: "inherit",
        borderColor: "inherit",
        borderRadius: 0,
        position: 'relative',
        "&:hover": {
            color: "black",
            background: "rgb(214, 211, 211)"
        }
    },
    hidden: {
        display: "none"
    }

})

export default styles