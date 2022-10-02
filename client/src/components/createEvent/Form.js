export function Form(props) {
  const { children, ...other } = props;
  return <div {...other}>{props.children}</div>;
}
