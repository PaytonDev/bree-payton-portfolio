import { Grid, Box } from "@material-ui/core";
import { InlineWidget } from "react-calendly";
import styles from "./styles";

const Contact = () => {
  const classes = styles();

  const calendlySettings = {
    backgroundColor: "080808",
    hideEventTypeDetails: true,
    primaryColor: "FDD641",
    textColor: "ffffff",
  };

  return (
    <section id="Contact" className={classes.formContainer}>
      <header className={classes.header}>Contact</header>
      <InlineWidget pageSettings={calendlySettings} url="https://calendly.com/breeana-payton/" />
    </section>
  );
};

export default Contact;
