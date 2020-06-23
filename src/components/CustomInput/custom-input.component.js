import React from "react";
import TextField from "@material-ui/core/TextField/TextField";

const CustomInput = ({handleChange, label, ...rest}) => (
    <TextField
        variant="outlined"
        onChange={handleChange}
        margin="normal"
        label={label}
        {...rest}
    />
);

export default CustomInput;