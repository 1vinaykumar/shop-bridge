import { makeStyles } from "@material-ui/core";

export const productForm = makeStyles((theme) => ({
  formContainer: {},
  inputItem: {
    marginBlock: 10,
  },
  submitButton: {
    width: "100%",
    alignSelf: "center",
    marginTop: 20,
  },
}));

export const viewProduct = makeStyles((theme) => ({
  listItemPrimary: {
    width: "50%",
  },
  listItemSecondary: {
    width: "50%",
  },
  title: {
    marginBlock: 30,
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
}));
