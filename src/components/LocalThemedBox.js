import React, { createContext, useContext, useState } from 'react';
import { ThemeChangeContext, ThemeContext } from './ThemeProvider';


const LocalThemedBox = () => {
const globalTheme = useContext(ThemeContext);
const LocalThemeContext = createContext();
const [theme,setTheme] = useState(globalTheme);

const changeLocalTheme = () => {
    setTheme(theme==='dark'?"light":"dark")
}
return(
    <div  className={"bg-"+theme} style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box">
        {/* Write code below this line */}
        <LocalThemeContext.Provider value={theme}>
        <p className={"txt-"+theme}>THis is my Text</p>
       <button className={"btn btn-"+theme}id="local-themed-text-container" onClick={changeLocalTheme}>Toggle local theme to {theme==='dark'?'light':'dark'}</button>
        </LocalThemeContext.Provider>
       
    </div>
)
}

export { LocalThemedBox }