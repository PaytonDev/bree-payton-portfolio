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
      text: "Resume",
      url: "resume",
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
    </List>
  );
};

export default SidebarLinks;
