import { Grid, Box } from "@material-ui/core";
import styles from "./styles";

const Contact = () => {
  const classes = styles();

  return (
    <section id="Contact" className={classes.formContainer}>
      <header className={classes.header}>Contact</header>

      <Grid container item justifyContent="center" alignItems="center"></Grid>
    </section>
  );
};

export default Contact;
