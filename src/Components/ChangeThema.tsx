import React from 'react'
import { useTheme } from '../Context/ThemeContext'

const ChangeThema = () => {
    const { theme, toggleTheme } = useTheme();

    console.log()
    return (
        <div>
            Active theme: {theme}
            <button onClick={() => toggleTheme()}>Change Thema</button>
        </div>
    )
}

export default ChangeThema