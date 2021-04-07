import React, { useState } from 'react' 
import './Day.scss'
import { weatherIcon } from '../../api/WeatherIcons'


const Day = (props) => {

    const { day } = props;
    const date = new Date(day.Date);
    const dayName = date.toString().split(' ')[0];
    const maxTemp = Math.floor(day.Temperature.Maximum.Value);
    const minTemp = Math.floor(day.Temperature.Minimum.Value);  
    const [isClicked, setIsClicked]  = useState(false);

    const renderTemp = () => {
        if(props.isDayTime){
            return (
                <div className='max'>
                    <div className='temp-number-wrap'>
                        {maxTemp}   
                        {<span>&#8451;</span>}                         
                    </div>                  
                    <span className='icon'>{weatherIcon(day.Day.Icon)}</span>
                    {isClicked &&  day.Day.IconPhrase}   
                </div>
            )
        } else {
            return (
                <div className='min'>
                    <div className='temp-number-wrap'>
                            {minTemp}                                                       
                            {<span>&#8451;</span>}
                        </div>   
                        <span className='icon'>{weatherIcon(day.Night.Icon)}</span>
                        {isClicked && day.Night.IconPhrase}       
                </div>    
            )
        }
    }
    
    return (
        <div className='day'
        onClick={() => setIsClicked(!isClicked)}>                         
            <div className='name'>
                {dayName}            
            </div>  
            <div className='temp'>
                {renderTemp()}
            </div>                      
        </div>
    )
}

export default Day;