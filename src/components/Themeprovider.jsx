import React, { createContext, useContext,useState } from 'react'
const TheameContext = createContext();
export const Themeprovider = ({children}) => {
 const [theme, settheme] = useState('Light');
 const toggle=()=>{
    settheme((pt)=>(pt==='Light') ? 'Dark':'Light');
 }
 const value={theme,toggle}
    return (
    <div>
    <TheameContext.Provider value={value}>
    {children}
    </TheameContext.Provider>
    </div>
  )
}

export const useTheme = ()=>useContext(TheameContext);
