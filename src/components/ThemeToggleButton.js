import React, { useContext } from 'react';
import { ThemeChangeContext, ThemeContext } from './ThemeProvider';


const ThemeToggleButton = () =>{
    const [theme,changeThemeHandler] = useContext(ThemeContext)
    return (
       <>
        <button className={"btn btn-"+theme+" txt-"+theme} id="global-theme-toggler" onClick={changeThemeHandler}>Toggle local theme to {theme==='dark'?'light':'dark'}</button>
       </>
    )

}
export {ThemeToggleButton}