import axios from 'axios';
const API_ROOT_PATH = 'http://localhost:3232';
const API_KEY = '7fB5nhJLHse1DTqkRbNfwayem9GB6GiQ';
const CITY_SEARCH_ENDPOINT = 'http://dataservice.accuweather.com/locations/v1/search';
const FIVE_DAYS_ENDPOINT = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/'
const CURRENT_CONDITIONS = 'http://dataservice.accuweather.com/currentconditions/v1/'

export const createApiClient = () => {
    return {
        getCityKey: async (val) => {
            return axios.get(`${CITY_SEARCH_ENDPOINT}?q=${val}&apikey=${API_KEY}`).then(res => res.data);
        },
        getFiveDays: async (key) => {
            return axios.get(`${FIVE_DAYS_ENDPOINT}${key}?apikey=${API_KEY}&metric=${true}`).then(res => res.data);
        },
        getCurrentCondition: async (key) => {
            return axios.get(`${CURRENT_CONDITIONS}${key}?apikey=${API_KEY}&metric=${true}`).then(res => res.data);
        },
    }
}

