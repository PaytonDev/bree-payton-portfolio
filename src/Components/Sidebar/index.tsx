import SidebarLinks from "./SidebarLinks";
import { Avatar, Divider, Grid } from "@material-ui/core";
import styles from "./styles";
import AvatarPhoto from "../../Assets/AvatarPhoto.jpg";

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
      <Avatar alt="Breeana Payton" src={AvatarPhoto} className={classes.avatarPhoto} />
      <Divider />
      <SidebarLinks />
    </Grid>
  );
};

export default Sidebar;
