import TextField from "@mui/material/TextField";

export const FormInput = ({ label, value, onChange, style, error = null }) => {
  return (
    <TextField
      required
      id="outlined-required"
      label={label}
      value={value}
      onChange={onChange}
      style={{ ...style, marginLeft: "0" }}
      {...(error && { error: true, helperText: error })}
      inputProps={{ "data-testid": "form-input" }}
    />
  );
};
