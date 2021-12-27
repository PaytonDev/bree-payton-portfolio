import { Grid } from "@material-ui/core";
import styles from "./styles";

const ContactForm = () => {
  const classes = styles();

  return (
    <Grid container item className={classes.formContainer} justifyContent="center">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/breeana-payton"
        style={{ minWidth: 320, height: 630 }}
      ></div>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
    </Grid>
  );
};

export default ContactForm;
