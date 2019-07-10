import React from 'react'
import './timerType.css'


const TimerType = ({image, name}) => (
    <div className="shadow-container">
        <div className="flex-center">
            <img alt="pomodoro" src={`${process.env.PUBLIC_URL}/img/${image}`} />
            <h2>{name}</h2>
        </div>
    </div>
)

export default TimerType