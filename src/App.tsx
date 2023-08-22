import { UserProvider, type User } from "./components/UserProvider";
import "./App.css";
import { useState } from "react";
import Person from "./components/Person";

function App() {
  const [user, setUser] = useState<User | null>({ id: "1", name: "simon" });

  const handleUserChange = function (user: User | null): void {
    setUser(user);
    //can set the user to local storage here
  };

  //can use useeffect to set the intitial data for user by using localstorage or by executing queries to fetch data
  return (
    <UserProvider value={{ user, handleUserChange }}>
      <Person />
    </UserProvider>
  );
}

export default App;
