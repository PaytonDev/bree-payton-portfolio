import { makeStyles } from "@material-ui/styles";

const styles = makeStyles({
    root: {
        '&$focused $notchedOutline': {
            borderColor: 'rgb(214, 211, 211)',
            color: 'rgb(214, 211, 211)'
        },
        '& .MuiOutlinedInput-root': {
            '& span': {
              color: 'rgb(214, 211, 211)',
            },
        },
    },
    button: {
        color: "inherit",
        borderColor: "inherit",
        borderRadius: 0,
        position: 'relative',
        margin: "0 20px",
        "&:hover": {
            color: "black",
            background: "rgb(214, 211, 211)"
        }
    },
    textField: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgb(214, 211, 211)',
              color: 'rgb(214, 211, 211)'
            },
        },
        color: 'rgb(214, 211, 211)'
    },
    inputLabel: {
        color: 'rgb(214, 211, 211)'
    },
    input: {
        color: 'rgb(214, 211, 211)'
    },
    inputGrid: {
        margin: "10px 0"
    },
    focused: {
        
    },
    notchedOutline: {
       
    },
    form: {
        width: '50vw',
        textAlign: 'center'
    },
    formContainer: {
        textAlign: "center"
    },
})

export default styles