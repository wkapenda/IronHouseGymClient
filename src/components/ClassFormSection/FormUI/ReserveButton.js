import React, { useState } from "react";
import { useFormikContext } from "formik";
import { withStyles } from '@material-ui/core/styles';
import { Button as ResButton } from "../../ButtonElements"
import { ArrowRight, ArrowForward } from "../../InfoSection/InfoElements"
import { Button } from "@material-ui/core";

const ClassButton = ({ children }) => {

  const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #DCE35B 30%, green 90%)',
      borderRadius: 3,
      border: 0,
      color: 'black',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
 
    onClick: handleSubmit
  };

  const [hover, setHover] = useState(false);

  const onHover = () => {
      setHover(!hover)
  }

  return <ResButton
  {...configButton}
  onMouseEnter={onHover} 
  onMouseLeave={onHover}
  primary="true"
  dark="true"
  smooth={true} 
  duration={500} 
  spy={true}
  exact="true" 
  style={{borderRadius: "5px"}}
  >
  RESERVE {hover ? <ArrowForward /> : <ArrowRight />}
  </ResButton>

  {/* <StyledButton
    {...configButton}
  onMouseEnter={onHover} 
  onMouseLeave={onHover}
  >Reserve {hover ? <ArrowForward /> : <ArrowRight />}
  </StyledButton> */}

};

export default ClassButton;
