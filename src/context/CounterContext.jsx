import { createContext , useState } from "react";

export let CounterContext =createContext(0);

export default function CounterContextProvider({children}){
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState();

  return <CounterContext.Provider value={{count , setCount}}>

    {children}
  </CounterContext.Provider>


}