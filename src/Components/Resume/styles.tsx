import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  paperContainer: {
    maxWidth: "40vw",
    height: "90vh",
    color: "#000",
    borderRadius: 0,
    margin: "3em auto",
  },
  header: {
    margin: "1em auto",
  },
  contact: {
    marginBottom: "1em",
  },
  sectionContainer: {
    margin: "10px 15px",
  },
  sectionTitle: {
    textTransform: "uppercase",
    textDecoration: "underline",
    textAlign: "left",
    fontWeight: 700,
  },
  jobTitle: {
    textAlign: "left",
    fontWeight: 700,
    marginRight: "auto",
  },
  jobTimeframe: {
    textAlign: "right",
    fontWeight: 700,
  },
  jobBody: {
    textAlign: "left",
  },
});

export default styles;
