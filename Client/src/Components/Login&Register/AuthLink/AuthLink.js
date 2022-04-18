import { Link } from "react-router-dom";

const styledLink = {
  display: "block",
  padding: "15px 10px 0",
  fontSize: "1.1em",
  fontFamily: "inherit",
  textAlign: "center",
  borderTop: "1px dashed black",
  color: "blue",
  textDecoration: "underline",
};

export default function AuthLink(props) {
  return (
    <Link style={styledLink} to={props.to}>
      {props.msg}
    </Link>
  );
}
