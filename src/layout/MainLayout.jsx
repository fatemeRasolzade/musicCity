import React from 'react'
import NavBar from '../components/common/NavBar'

const MainLayout = (props) => {
    return (
        <div>
            <NavBar/>
            
            {props.children}
            
        </div>
    )
}

export default MainLayout
