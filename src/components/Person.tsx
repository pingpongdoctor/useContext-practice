import UserContext from "./UserProvider";
import { useContext } from "react";

export default function Person() {
  const { user, handleUserChange } = useContext(UserContext);
  return (
    <div>
      <p>{user?.name}</p>
      <button
        onClick={() => {
          handleUserChange({ id: "2", name: "simon2" });
        }}
      ></button>
    </div>
  );
}
