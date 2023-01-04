import React, { useContext } from 'react';
import { ThemeChangeContext, ThemeContext } from './ThemeProvider';


const ThemeToggleButton = () =>{
    const theme= useContext(ThemeContext)
    const changeTheme = useContext(ThemeChangeContext)
    return (
       <>
        <button className={"btn btn-"+theme} id="global-theme-toggler" onClick={changeTheme}>Toggle local theme to {theme==='dark'?'light':'dark'}</button>
       </>
    )

}
export {ThemeToggleButton}