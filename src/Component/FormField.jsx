import React from "react";
import { TextField } from "@mui/material";
import PropTypes from "prop-types";

// It is text form but we make it more easy to use by passing the props
function FormField({ label, name, type, value, onChange, required }) {
  return (
    <TextField
      label={label}
      variant="outlined"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      fullWidth
    />
  );
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default FormField;
