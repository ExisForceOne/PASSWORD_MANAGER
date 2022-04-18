import KeysContainer from "../../KeysContainer/KeysContainer";
import KeysItem from "../../KeysItem/KeysItem";

export default function Tab(props) {
  return (
    <KeysContainer
      header={
        !props.data.length
          ? "You dont have any passwords in this category."
          : null
      }
    >
      {props.data.map((item) => (
        <KeysItem key={item._id} {...item} />
      ))}
    </KeysContainer>
  );
}
