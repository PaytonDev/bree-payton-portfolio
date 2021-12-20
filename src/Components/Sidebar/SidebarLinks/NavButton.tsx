import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export const NavButton = withStyles({
  root: {
    fontSize: 28,
    fontFamily: "inherit",
    border: "1px solid #d6d3d3",
    color: "#D6D3D3",
    backgroundColor: "#000",
    width: "90%",
    height: "80px",
    borderRadius: 0,
    boxShadow: "6px 6px 1px 0px #D6D3D3",
  },
})(Button);