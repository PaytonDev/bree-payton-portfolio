import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  list: {
    display: "flex",
    justifyContent: "center",
  },
  paper: {
    background: "black",
    border: "1px solid #fff",
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
    height: "200px",
    width: "200px",
  },
});

export default styles;
