import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  list: {
    display: "flex",
    justifyContent: "center",
  },
  paper: {
    background: "black",
    border: "1px solid #fff",
    maxHeight: "100vh",
  },
  sidebarHeader: {
    color: "rgb(214, 211, 211)",
    fontSize: 20,
  },
  container: {
    display: "flex",
    float: "left",
  },
  avatarPhoto: {
    maxHeight: "200px",
    maxWidth: "200px",
    height: "100%",
    width: "100%",
  },
  avatarContainer: {
    marginBottom: "1.25em",
  },
  socialLink: {
    color: "inherit",
    cursor: "pointer",
  },
});

export default styles;
