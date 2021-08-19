import React from "react";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core";
import { Container, Grid, Typography } from "@material-ui/core";
import Textfield from "./FormUI/Textfield";
import CodeCellNumber from "./FormUI/CodeCellNumber";
import DatePicker from "./FormUI/ClassDate";
import Swal from "sweetalert2";
import Button from "./FormUI/ReserveButton";
import FormikRadioGroup from "./FormUI/RadioButtons";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(8)
  }
}));

const genderOptions = ["Male", "Female", "Other"];

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  phone: "",
  gender: "",
  classDate: null
};

const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(13, "Phone number must have 9 digits"),
  //   .max(10, "Must be maximum 10 digits"),
  gender: Yup.string(),
  classDate: Yup.string().required("Required").nullable()
});

const FormContainer = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values, onSubmitProps) => {
                Swal.fire(
                  "Successful",
                  "You have reserved your spot!",
                  "success"
                );
                console.log(values);
                onSubmitProps.resetForm();
              }}
            >
              {(formik) => {
                // console.log(formik);
                return (
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography>Enter Details</Typography>
                      </Grid>

                      <Grid item xs={12}>
                        <Field
                          label="Select Date*"
                          name="classDate"
                          component={DatePicker}
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <Textfield name="firstName" label="First Name*" />
                      </Grid>

                      <Grid item xs={6}>
                        <Textfield name="lastName" label="Last Name*" />
                      </Grid>

                      <Grid item xs={6}>
                        <Field
                          label="Cell"
                          name="phone"
                          component={CodeCellNumber}
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <Field
                          label="Gender"
                          name="gender"
                          component={FormikRadioGroup}
                          options={genderOptions}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Button>Reserve</Button>
                      </Grid>
                    </Grid>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default FormContainer;
