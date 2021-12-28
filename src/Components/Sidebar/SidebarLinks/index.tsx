import { List, ListItem } from "@material-ui/core";
import { NavButton } from "./NavButton";
import { Link } from "react-router-dom";

import styles from "./styles";

const SidebarLinks = () => {
  const classes = styles();

  const navLinks = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Projects",
      url: "projects",
    },
    {
      text: "Skills",
      url: "skills",
    },
    {
      text: "Contact",
      url: "contact",
    },
  ];

  return (
    <List className={classes.list}>
      {navLinks.map((link, idx) => {
        return (
          <ListItem component="div" key={idx} className={classes.link}>
            <Link to={link.url} color="inherit" className={classes.linkText}>
              <NavButton>{link.text}</NavButton>
            </Link>
          </ListItem>
        );
      })}
      <ListItem component="div" key="resume" className={classes.link}>
        <a
          href="https://drive.google.com/file/d/1P913NwGISs_tKyczuEF8DGxQbO8tOu9-/view?usp=sharing"
          className={classes.linkText}
          target="_blank"
          rel="noreferrer"
        >
          <NavButton>Resume</NavButton>
        </a>
      </ListItem>
    </List>
  );
};

export default SidebarLinks;
