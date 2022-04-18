import AddNewKeyBtn from "../../Buttons/AddNewKeyBtn/AddNewKeyBtn";

export default function NoKeysInfo(props) {
  const styledDiv = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    textAlign: "center",
  };

  return (
    <div style={styledDiv}>
      <p>You don't have the keys yet, create your first one!</p>
      <AddNewKeyBtn />
      <p>\(￣︶￣*\)</p>
    </div>
  );
}
