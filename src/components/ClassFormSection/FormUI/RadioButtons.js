import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel
} from "@material-ui/core";

const renderOptions = (options) => {
  return options.map((option) => (
    <FormControlLabel
      key={option}
      value={option}
      control={<Radio color="primary" size="small" />}
      label={option}
    />
  ));
};

const FormikRadioGroup = ({
  field,
  form: { touched, errors },
  name,
  options,
  children,
  ...props
}) => {
  const fieldName = name || field.name;
  return (
    <React.Fragment>
      <FormLabel mt={5}>{props.label}</FormLabel>
      <RadioGroup {...field} {...props} name={fieldName} row>
        {/* Here you either map over the props and render radios from them,
         or just render the children if you're using the function as a child*/}
        {options ? renderOptions(options) : children}
      </RadioGroup>

      {touched[fieldName] && errors[fieldName] && (
        <span
          style={{ color: "red", fontFamily: "sans-serif", fontSize: "12px" }}
        >
          {errors[fieldName]}
        </span>
      )}
    </React.Fragment>
  );
};

export default FormikRadioGroup;
