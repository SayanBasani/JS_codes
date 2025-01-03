import { createContext, useState } from "react";

export const TheContext = createContext([]);
function ContextProvider({children,value}){
  const [Calval,setCalval] = useState('');
  console.log(Calval)
  return <TheContext.Provider value={{...value,Calval,setCalval}}>
    {children}
  </TheContext.Provider>
}
export default ContextProvider;