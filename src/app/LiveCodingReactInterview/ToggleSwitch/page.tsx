'use client'
import React, { useState } from 'react';

const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOn(!isOn)}>
                {isOn ? "On" : "Off"}
            </button>
        </div>
    )   
}
export default ToggleSwitch;