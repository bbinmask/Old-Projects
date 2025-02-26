import { createContext, useState } from "react";

const AccountContext = createContext({
  userName: "",
  email: "",
  password: "",
  wallet: 0,
  setWallet: () => {},
  setEmail: () => {},
  setUserName: () => {},
  setPassword: () => {},
  handleWallet: () => {},
  userId: null,
});

export const AccountContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userId = Math.floor(Math.random() * 99999999) + 1;

  const [wallet, setWallet] = useState(0);

  return (
    <AccountContext.Provider
      value={{
        email,
        setEmail,
        userName,
        setUserName,
        password,
        setPassword,
        userId,
        // handleWallet,
        wallet,
        setWallet,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
export default AccountContext;
