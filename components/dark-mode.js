'use client'

import useDarkMode from "@/hooks/use-dark-mode"

const nextModeIcons = {
    'light': '🌙',
    'dark': '☀️',
}

export default function DarkMode({defaultTheme}){
    const {theme,toggleTheme} = useDarkMode(defaultTheme)
 
    return(
        <button onClick={toggleTheme} className="rounded-3xl py-1 px-2 bg-gray-100 dark:bg-gray-700">{nextModeIcons[theme]}</button>
    )
}