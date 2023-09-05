import { createContext } from "react";
import { users } from "./products";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const auth = true;
  return (
    <ProductContext.Provider value={{ auth, users }}>
      {children}
    </ProductContext.Provider>
  );
};
