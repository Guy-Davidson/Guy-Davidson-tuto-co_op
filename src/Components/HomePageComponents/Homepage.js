import React, { useEffect, useState } from 'react'
import './Homepage.scss'
import SearchCity from './SearchCity'
import FiveDays from './FiveDays'
import { createApiClient } from '../../api/api';
import {writeData, readData} from './LocalStorage';
import { BiHeart } from 'react-icons/bi';
import { FaHeart } from "react-icons/fa";

const clicksArr = ["homeTab", "cityTextField", 'isFavoriteBtn'];

const api = createApiClient();

const Homepage = (props) => {    
    const [result, setResult] = useState(null); 
    const [isPlaying, setIsPlaying] = useState(false);
    const [isResultFavorited, setIsResultFavorited] = useState(false);

    const nextPlay = () => {
        const elm = document.getElementById(clicksArr[0]);        
        elm.style.backgroundColor = 'transparent';
        clicksArr.shift();
        onPlay();
    }

    const inputClick = () => {
        if(isPlaying && clicksArr.length === 2){
            nextPlay()
            return "Tel Aviv"
        } else {
            return ""
        }
    }

    const togglePlay = () => {
        if(isPlaying){
            setIsPlaying(false);
            props.homeSetIsPlaying(false)
        } else {
            setIsPlaying(true);
            props.homeSetIsPlaying(true)
        }
    }

    const onPlay = () => {           
        if(clicksArr.length){            
            const elm = document.getElementById(clicksArr[0]);            
            elm.style.backgroundColor = '#023e8a';        
        }
    }

    useEffect( () => {
        if(isPlaying){            
            onPlay()
        }
    }, [isPlaying])


    const addCityFav = () => {
        const currentFav = readData();
        if(result){                        
            let newCity = {
                key:result.Key,
                name:result.EnglishName, 
                country:result.Country.EnglishName,             
            }
            if(currentFav.find(c => c.key === newCity.key)){
                alert("This City is already in your favorites")
                return;
            } 
            currentFav.push(newCity);
            writeData(currentFav);
        }
    }

    const homeGetCityKey = async (val) => {  
        let searchResult = null;        
        searchResult = await api.getCityKey(val);
        setResult(searchResult[0]);          
    }

    const renderFiveDays = () => {                    
        return (
            <div>                
                <FiveDays cityKey={result.Key} />
            </div>
        )
    }

    const renderFavButton = () => {        
        if(isResultFavorited) {            
            return (
                <FaHeart 
                id='isFavoriteBtn'
                size='2em'
                className='heart'
                onClick={() => {
                    setIsResultFavorited(!isResultFavorited);                
                }}/> 
            )
        }else {            
            return (
                <BiHeart 
                id='isFavoriteBtn'
                size='2em'
                className='heart'
                onClick={() => {
                    if(isPlaying && clicksArr.length === 1){
                        nextPlay();
                    }                    
                    setIsResultFavorited(!isResultFavorited);
                    addCityFav();
                }}/> 
            )
        }
    }

    return (
        <div className='home-page'>            
            <div className='welcome'><h1>Welcome</h1></div>            
                <div className='home-search-heart'>
                    <div className='home-search'>
                        <SearchCity 
                        isPlaying={isPlaying}
                        inputClick={inputClick}
                        homeGetCityKey={homeGetCityKey}
                        addCityFav={addCityFav}/>
                    </div>
                    <div>
                        {renderFavButton()}
                    </div>
                </div>
            <div>
                {result && renderFiveDays()}                
            </div>
            <div className='play'>
                <button onClick={togglePlay}>
                    Play!                    
                </button>
                {clicksArr.length === 3 &&  props.homeBeenPlayed && nextPlay()}
            </div>
        </div>
    )

}

export default Homepage;


