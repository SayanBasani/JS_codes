import { createContext,  useState } from "react";

export const calContext = createContext();

export default function CalContextProvider({children}){
  const [InpVal , setInpVal] = useState("")

  return(
    <calContext.Provider value={{ InpVal, setInpVal }}>
      {children}
    </calContext.Provider>

  );
}
