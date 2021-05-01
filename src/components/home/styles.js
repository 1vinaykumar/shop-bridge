import { makeStyles } from "@material-ui/core";

export const tabStyles = makeStyles((theme) => ({
  tabButton: {
    borderRadius: 25,
    height: 220,
  },
  cardRoot: {
    borderRadius: 25,
    width: "100%",
    height: 200,
    overflow: "hidden",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
  },
  btnEdit: {
    flex: "1 1 33.33%",
    borderRadius: 20,
    backgroundColor: "#fcba03",
  },
  btnDelete: {
    flex: "1 1 33.33%",
    borderRadius: 20,
    backgroundColor: "#e02222",
  },
  btnCancel: {
    flex: "1 1 33.33%",
    borderRadius: 20,
  },
  cardContent: {
    height: "70%",
  },
  nameContainer: {
    height: "70%",
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: 20,
  },
  priceContainer: {
    height: "30%",
    width: "100%",
    backgroundColor: "#80d9d6",
    borderRadius: 10,
  },
}));
