import { Grid, TextField, Button} from '@material-ui/core'
import styles from './styles'
import { useForm, ValidationError } from '@formspree/react'

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xdoyzzde");

    const classes = styles()

    if (state.succeeded) {
        return <h2>Thanks for reaching out. <br /> I'll get back to you as soon as possible.</h2>
    }
        
    return (
        <Grid container item className={classes.formContainer} justifyContent='center'>
            <Grid container item justifyContent="center">
            <form onSubmit={handleSubmit} className={classes.form}>
            <Grid item className={classes.inputGrid} >
                 <TextField 
                    fullWidth
                    variant="outlined"
                    type="text" 
                    name="name" 
                    id="full-name" 
                    label="Full Name" 
                    required
                    className={classes.textField}
                    InputProps={{ classes: {root: classes.root, focused: classes.focused, notchedOutline: classes.notchedOutline}}}
                    InputLabelProps={{classes: {root: classes.inputLabel}, style: {color: 'rgb(214, 211, 211)'}}}
                />
            </Grid>
            <Grid item className={classes.inputGrid}>
 
                <TextField 
                    fullWidth
                    variant="outlined" 
                    type="email" 
                    id="email" 
                    name="email" 
                    label="Email"
                    className={classes.textField}
                    InputProps={{ classes: {root: classes.root, focused: classes.focused, notchedOutline: classes.notchedOutline}}}
                    InputLabelProps={{classes: {root: classes.inputLabel}, style: {color: 'rgb(214, 211, 211)'}}}
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </Grid>
            <Grid item className={classes.inputGrid}>
                <TextField 
                    fullWidth
                    variant="outlined" 
                    multiline 
                    name="message" 
                    id="message" 
                    rows={5}
                    label="Message" 
                    className={classes.textField}
                    InputProps={{ classes: {root: classes.root, focused: classes.focused, notchedOutline: classes.notchedOutline}}}
                    InputLabelProps={{classes: {root: classes.inputLabel}, style: {color: 'rgb(214, 211, 211)'}}}
                    >
                        
                </TextField>
            </Grid>
            <Button 
                className ={classes.button} 
                variant="outlined"
                type="submit" 
                disabled={state.submitting}
                size="large">
                Submit
            </Button>
            </form>
            </Grid>
        </Grid>
    )
}

export default ContactForm

