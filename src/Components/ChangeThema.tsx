import React, { useContext } from 'react'
import ThemaContext from '../Context/ThemeContext'

const ChangeThema = () => {
    const  data  = useContext(ThemaContext);

    console.log(data)
    return (
        <div>
            <button>Change Thema</button>
        </div>
    )
}

export default ChangeThema