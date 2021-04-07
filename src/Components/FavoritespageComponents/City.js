import React, { useEffect, useState } from 'react' 
import './City.scss'
import { weatherIcon } from '../../api/WeatherIcons'

    const City = (props) => {   
        const [isClicked, setIsClicked] = useState(false)

        return (
            <div className='cities-wrap'>
                <div className='city'
                onClick={() => setIsClicked(!isClicked)}>
                    <div className='title'>
                        <span className='name'>{props.name}</span>
                        <span className='country'>({props.country})</span>
                    </div>
                    <div className='temp'>
                        <div className='temp-number-wrap'>
                            {props.temperature}   
                            {<span> &#8451;</span>}                        
                        </div>                  
                        <span className='icon'>{weatherIcon(props.weatherIcon)}</span>
                        {props.description}   
                    </div>
                </div>
            </div>
        )
    }

    export default City;