import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  CircularProgress,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { productForm } from "./styles";

const validationSchema = Yup.object({
  name: Yup.string().min(3).required(),
  description: Yup.string().required(),
  price: Yup.number().required(),
  quantity: Yup.number().min(0).required(),
  discount: Yup.number().min(0).max(100).required(),
});

export const InputField = ({ formOptions, name, label, ...otherProps }) => {
  const classes = productForm();
  const errors = formOptions.formState.errors;
  const { ref, ...rest } = formOptions.register(name);
  return (
    <Grid item xs={10} md={8}>
      <TextField
        fullWidth
        label={label}
        inputRef={ref}
        {...rest}
        variant="outlined"
        className={classes.inputItem}
        error={!!errors?.[name]}
        helperText={errors?.[name]?.message}
        {...otherProps}
      />
    </Grid>
  );
};

function ProductForm({ title, defaultValues = {}, onSubmit, loading }) {
  const classes = productForm();
  const formOptions = useForm({
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  return (
    <>
      <Typography align="center" variant="h4">
        {title}
      </Typography>
      <Grid container direction="row" justify="center" alignItems="center">
        <InputField formOptions={formOptions} label="Name" name="name" />
        <InputField
          formOptions={formOptions}
          label="Description"
          name="description"
          multiline
        />
        <InputField formOptions={formOptions} label="Price" name="price" />
        <InputField
          formOptions={formOptions}
          label="Quantity"
          name="quantity"
        />
        <InputField
          formOptions={formOptions}
          label="Discount"
          name="discount"
        />

        <Grid item xs={8} md={6}>
          <Button
            variant="contained"
            onClick={formOptions.handleSubmit(onSubmit)}
            className={classes.submitButton}
            data-testid="submit-button"
          >
            {loading ? <CircularProgress size={20} /> : "Submit"}
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default ProductForm;
