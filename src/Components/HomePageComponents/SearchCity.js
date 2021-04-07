import React from 'react'
import './SearchCity.scss'
import { FiSearch } from 'react-icons/fi'; 

const SearchCity = (props) => {    
    let searchTimeOut = null;    

    const onSearch = async (val) => {        
		clearTimeout(searchTimeOut);
		searchTimeOut = setTimeout(async () => {            
            props.homeGetCityKey(val);            
		}, 1000);
	}    

    return (
        <div className='search-city'>                            
            <div className='search-item choose'>Choose a city: </div>
            <div className='search-wrap search-item'>
                <FiSearch className='search-icon'/>
                <input  id='cityTextField' type="search" placeholder="Search..." 
                onClick={() => {
                    onSearch(props.inputClick())
                    document.getElementById("cityTextField").value = props.inputClick();
                }}
                onChange={(e) => onSearch(e.target.value)}/>                                
            </div>                        
            
        </div>    
    )

}

export default SearchCity;