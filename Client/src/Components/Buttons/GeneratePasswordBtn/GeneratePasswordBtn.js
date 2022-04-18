import { FaRandom } from "react-icons/fa";

export default function GeneratePasswordBtn(props) {
  const styledButton = {
    backgroundColor: "#007bff",
    color: "white",
    fontSize: "2rem",
    padding: "20px 40px",
    borderRadius: "8px",
    margin: "15px auto",
    display: "flex",
    justyfiContent: "center",
    alignItems: "center",
  };

  return (
    <button style={styledButton} {...props} type="button">
      <FaRandom />
    </button>
  );
}
