import React, { useEffect, useState } from 'react'

const useDarkMode = () => {
    const [theme, setTheme] =useState(localStorage.theme);
    const themeColor =theme==='dark' ? 'dark':'light';
    useEffect(()=>{
        const root =window.document.documentElement;
        root.classList.remove(themeColor);
        root.classList.add(theme);
        localStorage.setItem('theme',theme);

    },[theme,themeColor]);
    return [theme,themeColor];
}

export default useDarkMode