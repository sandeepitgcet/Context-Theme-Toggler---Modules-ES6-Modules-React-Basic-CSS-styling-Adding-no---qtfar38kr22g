import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './ThemeProvider';


const LocalThemedBox = () => {
    const theme = useContext(ThemeContext)
const [localTheme,setLocalTheme] = useState(theme);

useEffect(()=>{
    setLocalTheme(theme)
},[theme])

const changeLocalTheme = () => {
    setLocalTheme(localTheme=='dark'?"light":"dark")
}
return(
    <div  className={"bg-"+localTheme} style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box">
        <p className={"txt-"+localTheme} id="local-themed-text-container">THis is my Text</p>
        <button className={"btn btn-"+localTheme} id="local-themed-text-container" onClick={changeLocalTheme}>Toggle local theme to {localTheme==='dark'?'light':'dark'}</button>
    </div>
)
}

export { LocalThemedBox }