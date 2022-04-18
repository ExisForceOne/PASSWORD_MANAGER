import { FaRandom } from "react-icons/fa";

export default function OpenGeneratorBtn(props) {
  const styledBtn = {
    padding: "15px",
    display: "flex",
    justyfiContent: "center",
    alignItems: "center",
    fontSize: "1.25em",
  };

  return (
    <button type="button" style={styledBtn} onClick={() => props.onClick()}>
      <FaRandom />
    </button>
  );
}
