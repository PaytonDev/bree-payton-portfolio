import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./styles";

type NavLinksProps = {
  text: string;
  url: string;
};

const NavLink = (props: NavLinksProps) => {
  const classes = styles();

  return (
    <Grid item>
      <Link to={props.url} className={classes.links}>
        {console.log(props.url)}
        {props.text}
      </Link>
    </Grid>
  );
};

export default NavLink;
