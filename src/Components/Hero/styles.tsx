import { makeStyles } from "@material-ui/styles";

const styles = makeStyles({
  heroText: {
    fontSize: 76,
    animation: "fadeIn",
    animationDuration: "1.5s",
    margin: "25 0",
  },
  heroSection: {
    height: "100vh",
  },
  text: {
    fontSize: 20,
    color: "#d6d3d3",
    fontWeight: 200,
    display: "inline-block",
  },
  btnContainer: {
    margin: 50,
  },
  button: {
    color: "inherit",
    borderColor: "inherit",
    borderRadius: 0,
    position: "relative",
    margin: "0 15",
    "&:hover": {
      color: "black",
      background: "rgb(214, 211, 211)",
    },
  },
  icon: {
    marginRight: 5,
  },
});

export default styles;
