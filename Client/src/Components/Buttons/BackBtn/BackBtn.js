export default function BackBtn(props) {
  const styledBtn = {
    padding: "10px 20px",
    margin: "5px",
    fontSize: "inherit",
    color: "white",
    borderRadius: "8px",
    backgroundColor: "#dc3545",
  };

  return (
    <button type="button" style={styledBtn} onClick={() => props.onClick()}>
      {props.text}
    </button>
  );
}
