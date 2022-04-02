import { makeStyles } from "@material-ui/core";
import { relative } from "path";

const styles = makeStyles({
    list: {
        display: "flex",
        justifyContent: "center",
    },
    sidebarContainer: {
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
        maxHeight: "250px",
        maxWidth: "250px",
        display: "inline-block",
        position: "absolute",
        top: 0,
        left: 0,
    },
    avatarContainer: {
        display: "inline-block",
        position: "relative",
        maxWidth: "250px",
        width: "100%",
        padding: "10%",
        verticalAlign: "middle",
        overflow: "hidden",
    },
    socialLink: {
        color: "inherit",
        cursor: "pointer",
    },
});

export default styles;
