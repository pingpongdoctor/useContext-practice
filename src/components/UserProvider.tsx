import { createContext } from "react";

export interface User {
  id: string;
  name: string;
}

interface UserContextType {
  user: User | null;
  handleUserChange: (user: User | null) => void;
}

const UserContext = createContext<UserContextType>({} as UserContextType); //set default value

export const UserProvider = UserContext.Provider;
export default UserContext;
