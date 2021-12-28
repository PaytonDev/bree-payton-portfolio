import { Grid, TextField, Button } from "@material-ui/core";
import styles from "./styles";

const ContactForm = () => {
  const classes = styles();

  return <Grid container item className={classes.formContainer} justifyContent="center"></Grid>;
};

export default ContactForm;
