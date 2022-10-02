import Button from "@mui/material/Button";

export const FormButton = (props) => {
  return (
    <>
      <Button
        variant="contained"
        style={{ marginTop: "15px" }}
        onClick={props.onClick}
        data-testid="form-button"
      >
        {props.children}
      </Button>
    </>
  );
};
