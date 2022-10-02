import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

export const DataPicker = ({ value, onChange, error }) => {
  return (
    <DesktopDatePicker
      label="Event Date"
      format="tt.mm.yyyy"
      value={value}
      data-testid="data-picker"
      onChange={onChange}
      renderInput={(params) => (
        <TextField
          required
          {...params}
          {...(error && { error: true, helperText: error })}
        />
      )}
    />
  );
};
