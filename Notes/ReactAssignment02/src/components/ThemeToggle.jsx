import React, { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function ThemeToggle({children}){

    const [theme,setTheme]=useState("light")
    function toggleTheme(){
        setTheme((prev)=>(prev==="light"?"dark":"light"))
    }
    return(
        <>
        <ThemeContext.Provider value={{theme,toggleTheme}}>
          {children}
        </ThemeContext.Provider>
        </>
    )
}