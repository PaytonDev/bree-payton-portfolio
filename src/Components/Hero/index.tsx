import { Grid, Box, Button } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";
import GitHubIcon from "@material-ui/icons/GitHub";
import styles from "./styles";

const Hero = () => {
  const classes = styles();

  return (
    <section id="Home">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.heroSection}
        spacing={0}
      >
        <Grid container item justifyContent="center">
          <Box className={classes.heroText}>
            <header id="hero-text">
              Hello 👋, I'm Bree Payton <br /> A Front-End Engineer
            </header>
          </Box>

          <Grid container item justifyContent="center" className={classes.btnContainer} spacing={3}>
            <Grid item>
              <Button
                className={classes.button}
                variant="outlined"
                size="large"
                href="https://github.com/PaytonDev"
                rel="noreferrer"
                target="_blank"
              >
                <GitHubIcon className={classes.icon} />
                Github
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classes.button}
                variant="outlined"
                size="large"
                href="https://www.linkedin.com/in/breeana-payton/"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedInIcon className={classes.icon} />
                LinkedIn
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classes.button}
                variant="outlined"
                size="large"
                href="https://docs.google.com/document/d/1LT0-bGsE5l9sE4_m1c-21BbzWoAHAA_Ge8Fp1f1knDQ/edit?usp=sharing"
                rel="noreferrer"
                target="_blank"
              >
                <DescriptionIcon className={classes.icon} />
                Resume
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Hero;
