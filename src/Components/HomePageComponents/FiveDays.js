import React, { useEffect, useState } from 'react' 
import './FiveDays.scss'
import Day from './Day'
import { createApiClient } from '../../api/api';
import { WiDaySunny, WiMoonAltWaxingCrescent3} from "react-icons/wi";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const api = createApiClient();

const FiveDays = (props) => {
    const [fiveDays, setFiveDays] = useState(null);
    const [isDayTime, setMode] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const initFiveDays = async () => {        
        let newResult = await api.getFiveDays(props.cityKey)
        setTimeout( () => {
            let { DailyForecasts } = newResult;            
            setFiveDays(DailyForecasts);
            setIsLoading(false)   

        }, 2000)     
    }

    useEffect( () => {  
        setIsLoading(true)              
        initFiveDays()
    }, [props.cityKey])

    const renderNavBar = () => {
        return (
            <div className='day-night-switch'>
            <WiDaySunny 
            size='2em' 
            className='icon'
            onClick={() => setMode(true)}/>
            {isLoading && renderLoadSpinner()}
            <WiMoonAltWaxingCrescent3 
            size='2em' 
            className='icon'
            onClick={() => setMode(false)}/>
        </div>   
        )
    }

    const renderLoadSpinner = () => {
        return (            
            <Loader
            className='icon'
            type="Circles"
            color="#023e8a"
            height={50}
            width={50}
            timeout={3000}/>            
        )
    }

    const renderFiveDays = () => {
        return (
            <div>
                <div className='five-days'>             
                    {fiveDays.map((day, index) => {
                      return (  
                            <Day day={day} key={index} isDayTime={isDayTime}/>
                      )
                    })}                
                </div>
            </div>

        )
    }

    return (
        <div className='five-days-wrap'>
            {renderNavBar()} 
            {!isLoading && renderFiveDays()}           
        </div>
    )
}

export default FiveDays;