import { Paper, Grid, Box, Typography, Link } from "@material-ui/core";
import LocalPhone from "@material-ui/icons/LocalPhone";
import Email from "@material-ui/icons/Email";
import styles from "./styles";

const Resume = () => {
  const classes = styles();

  return (
    <Paper className={classes.paperContainer}>
      <Box className={classes.header}>
        <Typography variant="h3">Breeana Payton</Typography>
      </Box>
      <Grid container justifyContent="center" className={classes.contact}>
        <Grid item xs={5}>
          <Box>
            <Typography variant="h6">
              <Email /> <Link href="mailto:breeana.payton@gmail.com">breeana.payton@gmail.com</Link>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box>
            <Typography variant="h6">
              <LocalPhone /> {`(918)-727-3064`}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid container item className={classes.sectionContainer}>
          <Grid item xs={12}>
            <Typography variant="body1" className={classes.sectionTitle}>
              Summary
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" className={classes.jobBody}>
              Frontend engineer with a proven ability to fully meet expectations in collaborative
              settings under strict and tight time constraints. As a continuous learner, I expanded
              my coding acumen through a 1,000+ hour coding Bootcamp focused on Javascript, React,
              TypeScript, & ExpressJS. Currently I work for AT&T converting their internal Ember and
              older React applications to improve performance and accessibility. I’m eager to use
              these skills to collaborate with teams to streamline their communication and processes
              and create the best possible experiences for the end users, clients, and fellow
              developers.
            </Typography>
          </Grid>
        </Grid>
        <Grid container item className={classes.sectionContainer}>
          <Grid item xs={12}>
            <Typography variant="body1" className={classes.sectionTitle}>
              Current Expreince
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={6}>
              <Typography variant="body1" component="div" className={classes.jobTitle}>
                {`AT&T - React Developer (Contract)`}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" component="div" className={classes.jobTimeframe}>
                {`Tulsa, OK Oct 2021 - Present`}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" component="div" className={classes.jobBody}>
              Performing React application conversions to ES6 standards, performance maintenance,
              and well rebuilding internal Ember applications with improved UX as React
              applications.
              <br />
              - Coordinating with a team of 8 Sr Developers and Engineers to rebuild a 3rd party
              application to improve integration with AT&T tools using continuous integration and
              deployment practices.
              <br />- Implementing improved UX by user testing and user interviews with various
              techs within the company and applying the feedback to current design.
            </Typography>
          </Grid>
        </Grid>
        <Grid container item className={classes.sectionContainer}>
          <Grid item xs={12}>
            <Typography variant="body1" className={classes.sectionTitle}>
              Projects
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={6}>
              <Typography variant="body1" component="div" className={classes.jobTitle}>
                <Link href="https://hear-me-out.netlify.app/" color="inherit">
                  Hear Me Out
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" component="div" className={classes.jobTimeframe}>
                {`Tulsa, OK 2021`}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" component="div" className={classes.jobBody}>
              {`A minimal, dark theme music player that lets you search and play 30 second samples of
              songs using Spotify’s song library. In building this web-based application, I
              displayed a working knowledge of ReactJS, Typescript, Redux and serverless methods to
              develop frontend design, user authorization through OAuth, and the API framework.`}
              <br />
              {`- Created a single page music player using React that controls the visibility of
              components via the useState Hook`}
              <br />- Produced code that is easier to read and debug with Typescript by assigning
              Type Aliases to all props and API responses
              <br />- Utilized Spotify Web API to retrieve music data by configuring React
              Components to make Redux Toolkit Query API calls based on user interaction
              <br />
              {`- Incorporated authentication into the app via Spotify by combining React’s
              useEffect and Spotify’s OAuth process`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Resume;
