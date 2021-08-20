import React from "react";
import MuiPhoneInput from "material-ui-phone-number";
import { useField, useFormikContext } from "formik";

const CodeCellNumber = (props) => {
  
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props.field.name);

  const handleChange = (value) => {
    setFieldValue(props.field.name, value);
  };

  const configSelect = {
    ...field,
    ...props,
    variant: "outlined",
    fullWidth: false,
    onChange: handleChange
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return <MuiPhoneInput {...configSelect} defaultCountry="na" />;
};

export default CodeCellNumber;
