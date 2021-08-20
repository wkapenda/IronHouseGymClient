import React from "react";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core";
import Textfield from "./FormUI/Textfield";
import CodeCellNumber from "./FormUI/CodeCellNumber";
import DatePicker from "./FormUI/ClassDate";
import Swal from "sweetalert2";
import ClassButton from "./FormUI/ReserveButton";
import FormikRadioGroup from "./FormUI/RadioButtons";

import {
  ClassFormContainer,
  ClassFormWrapper,
  TextWrapper,
  TextH3,
  FormInputWrapper,
  FormDate,
  FormDetailsWrapper,
  FirstNameInput,
  LastNameInput,
  CellNumberInput,
  GenderInput,
  ButtonWrapper
}
from "./ClassFormElements"

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(8)
  }
}));

const genderOptions = ["M", "F", "Other"];

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

const FormContainer = ({session}) => {

  const [{ day }] = session

  const classes = useStyles();

  return (
    <ClassFormContainer>
      <ClassFormWrapper>
        <TextWrapper>
          <TextH3> Please Enter Your Details to Reserve your Spot for this Session </TextH3>
        </TextWrapper>
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
                    <FormInputWrapper className="shadow">

                      <FormDate>
                        <Field
                          label="Select Date*"
                          name="classDate"
                          component={DatePicker}
                          options={day}
                        />
                      </FormDate>

                      <FormDetailsWrapper >

                      <FirstNameInput>
                        <Textfield name="firstName" label="First Name*" />
                      </FirstNameInput>

                      <LastNameInput>
                        <Textfield name="lastName" label="Last Name*" />
                      </LastNameInput>

                      <CellNumberInput>
                        <Field
                          label="Cell"
                          name="phone"
                          component={CodeCellNumber}
                          m={100}
                        />
                      </CellNumberInput>

                      <GenderInput>
                        <Field
                          label="Gender"
                          name="gender"
                          component={FormikRadioGroup}
                          options={genderOptions}
                        />
                      </GenderInput>

                      </FormDetailsWrapper>
                      <ButtonWrapper>
                        <ClassButton />
                      </ButtonWrapper>
                    </FormInputWrapper>
                  </Form>
                );
              }}
            </Formik>
      </ClassFormWrapper>
    </ClassFormContainer>
  );
};

export default FormContainer;
