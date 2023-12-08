import React from 'react'
import { Outlet } from 'react-router-dom'
import "./style.css"
function Projects() {
    return (
        <div>Projects Page
            <Outlet />
        </div>


    )
}

export default Projects