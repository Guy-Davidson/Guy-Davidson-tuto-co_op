import React, { useEffect, useState } from 'react'
import './Favoritepage.scss'
import { createApiClient } from '../../api/api';
import * as storage from '../HomePageComponents/LocalStorage'
import City from './City'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const api = createApiClient();

const Favoritepage = (props) => {
    const [cities, setCities] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const initFav = async () => {
        let savedCities = storage.readData(); 
        const tmp = []
        for (const itrCity of savedCities) {          
            let weatherRes = await api.getCurrentCondition(itrCity.key);                                                            
            let newCity = {
                weatherIcon:weatherRes[0].WeatherIcon,
                name:itrCity.name, 
                country:itrCity.country, 
                temperature:weatherRes[0].Temperature.Metric.Value,
                description:weatherRes[0].WeatherText,                
            }
            tmp.push(newCity)
            if(savedCities.length === tmp.length) {                
                setCities(tmp) 
                setIsLoading(false);
              }  
          }                 
        }

    useEffect( () => {
        const dummyTimeout = () => {
            setTimeout( () => {
                initFav();        
            }, 3000)  
        }
        dummyTimeout();
    }, [])


    const renderLoadSpinner = () => {
        return ( 
            <div className='spinner'>
            <Loader
            className='icon'
            type="Circles"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}/>  
            </div>                     
        )
    }

    const renderCities = () => {
        return (
            <div>
                {cities.map((city, index) => {
                    return (
                        <City 
                        key={index} 
                        name={city.name}
                        country={city.country}
                        temperature={city.temperature}
                        description={city.description}
                        weatherIcon={city.weatherIcon}/>                        
                    )
                })}
            </div>
        )
    }



    if(isLoading){        
        return renderLoadSpinner()                
    }

    return (
        <div className='favorite-page'>                                   
            {cities && renderCities()}
        </div>
    )

}

export default Favoritepage;