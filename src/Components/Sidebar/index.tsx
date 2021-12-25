import SidebarLinks from "./SidebarLinks";
import { Avatar, Divider, Grid, Box, Link } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import styles from "./styles";
import { SidebarAvatar } from "./Avatar";

const Sidebar = () => {
  const classes = styles();

  return (
    <Grid
      container
      item
      md={2}
      className={classes.paper}
      justifyContent="center"
      alignItems="center"
    >
      <Grid container item justifyContent="center" alignItems="center">
        <Grid container item xs={12} justifyContent="center" className={classes.avatarContainer}>
          <Avatar alt="Breeana Payton" className={classes.avatarPhoto}>
            {SidebarAvatar}
          </Avatar>
        </Grid>
        <Grid container item xs={12} justifyContent="center" alignItems="center">
          <Grid item xs={3}>
            <Link
              className={classes.socialLink}
              href="https://github.com/PaytonDev"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon /> <Box>GitHub</Box>
            </Link>
          </Grid>
          <Grid item xs={5}>
            <Box>
              <LocationOnIcon /> <Box>Tulsa, OK</Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Link
              className={classes.socialLink}
              href="https://www.linkedin.com/in/breeana-payton/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon /> <Box>LinkedIn</Box>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
      <SidebarLinks />
    </Grid>
  );
};

export default Sidebar;
