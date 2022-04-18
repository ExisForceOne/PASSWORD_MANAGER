export default function PasswordContainer(props) {
  const styledP = {
    backgroundColor: "rgb(191, 202, 202)",
    padding: "45px 10px",
    textAlign: "center",
    wordBreak: "break-all",
  };

  return <p style={styledP}>{props.children}</p>;
}
