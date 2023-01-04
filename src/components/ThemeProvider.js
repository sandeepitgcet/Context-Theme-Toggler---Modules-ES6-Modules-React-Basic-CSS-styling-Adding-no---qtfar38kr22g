import React, { createContext, useState } from 'react';

const ThemeContext = React.createContext()
const ThemeChangeContext = createContext()
const ThemeProvider = (props) =>{
    const [theme, setTheme] = useState("light");

    const changeThemeHandler = () => {
        console.log("changing theme from "+theme);
        if(theme === 'light'){
            setTheme('dark');
        }else{
            setTheme("light");
        }
    }
    return (
        <React.Fragment>
            <ThemeContext.Provider value={theme}>
                <ThemeChangeContext.Provider value={changeThemeHandler}>
                    {props.children}
                </ThemeChangeContext.Provider>
            </ThemeContext.Provider>
        </React.Fragment>
    )
}

export {ThemeProvider,ThemeContext, ThemeChangeContext}