import { makeStyles } from "@material-ui/core/styles";

export const navigationBarStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
  },
  title: {
    flexGrow: 1,
  },
  navigationSpace: {
    marginBottom: "60px",
    [theme.breakpoints.up("sm")]: {
      marginBottom: "120px",
    },
  },
  navOpen: {
    width: "280px",
    marginTop: 10,
  },
  time: {
    marginBlock: "auto",
    alignSelf: "flex-end",
  },
  listOption: {
    fontWeight: "bold",
    fontSize: "1rem",
  },
}));
