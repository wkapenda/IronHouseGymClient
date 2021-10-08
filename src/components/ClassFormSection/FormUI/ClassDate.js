import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { useField, useFormikContext } from "formik";

const DatePicker = ({options , ...props}) => {

  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props.field.name);
  let selectedValue = field.value;
  const { name, label } = props;

  const handleChange = (value) => {
    if (value != null) {
      setFieldValue(
        props.field.name,
        JSON.parse(JSON.stringify(value.toLocaleDateString("en-US")))
      );
    }
  };

  const configDate = {
    // ...field,
    ...props
  };

  if (meta && meta.touched && meta.error) {
    configDate.error = true;
    configDate.helperText = meta.error;
  }

  function enableDay(date) {

    if(options === "WEDNESDAY"){
      return date.getDay() !== 3;
    }else if(options === "SATURDAY"){
      return date.getDay() !== 6;
    }
    
  }

  return (
    <React.Fragment>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          {...configDate}
          autoOk
          disableToolbar
          variant="inline"
          inputVariant="outlined"
          label={label}
          format="dd/MMM/yyyy"
          name={name}
          value={selectedValue}
          onChange={handleChange}
          shouldDisableDate={enableDay}
          minDate={new Date()}
        />
      </MuiPickersUtilsProvider>
    </React.Fragment>
  );
};

export default DatePicker;
