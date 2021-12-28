import { Grid, Box } from "@material-ui/core";
import { InlineWidget } from "react-calendly";
import styles from "./styles";

const Contact = () => {
  const classes = styles();

  return (
    <section id="Contact" className={classes.formContainer}>
      <header className={classes.header}>Contact</header>
      <InlineWidget url="https://calendly.com/breeana-payton/30min?month=2021-12" />
    </section>
  );
};

export default Contact;
