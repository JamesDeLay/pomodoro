import React from 'react'
import './menu.css'
const Menu = () => (
    <div className="menu-container">
        <div className="shadow-container">
            <div className="flex-center">
                <img src={process.env.PUBLIC_URL + '/img/pomodoro.png'} />
            </div>
        </div>
        <div className="shadow-container">
            <div className="flex-center">
                <img src={process.env.PUBLIC_URL + '/img/pomodoro_green.png'} />
            </div>
        </div>
    </div>
)

export default Menu