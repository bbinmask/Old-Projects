import { createContext, useState } from "react";

export const ItemsContext = createContext({
  items: {},
  setItems: () => {},
});

export const ItemsContextProvider = ({ children }) => {
  const [items, setItems] = useState();
  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      {children}
    </ItemsContext.Provider>
  );
};
