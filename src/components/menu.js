import React from 'react'
import './menu.css'
import TimerType from './timerType';

const TimerSelector = ({image, name}) => (
    <div className="menu-container">
        <TimerType image="pomodoro.png" name="Vanilla Timer"/>
        <TimerType image="pomodoro_green.png" name="Custom Timer"/>
    </div>
)

export default TimerSelector