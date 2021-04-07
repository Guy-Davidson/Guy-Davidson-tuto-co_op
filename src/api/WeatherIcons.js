import { WiDaySunny, WiDaySunnyOvercast, WiDayLightWind, WiDayCloudy,
    WiCloudy, WiCloudyWindy, WiDayShowers, WiDayRainMix,
    WiDaySleetStorm, WiDayRain, WiDaySnow, WiDaySleet,
    
    WiNightClear, WiNightAltCloudy, WiNightAltRain, 
    WiNightAltSleetStorm, WiNightAltSnowWind} from "react-icons/wi";

    export const weatherIcon = (index) => {
        let icons = [
        <WiDaySunny size='3.5em'/>, <WiDaySunnyOvercast size='3.5em'/>, <WiDaySunnyOvercast size='3.5em'/>, 
        <WiDaySunnyOvercast size='3.5em'/>, <WiDayLightWind size='3.5em'/>,
        <WiDayCloudy size='3.5em'/>, <WiCloudy size='3.5em'/>, <WiCloudyWindy size='3.5em'/>, 
        <WiCloudyWindy size='3.5em'/>, <WiCloudyWindy size='3.5em'/>, 
        <WiCloudyWindy size='3.5em'/>, <WiDayShowers size='3.5em'/>, <WiDayRainMix size='3.5em'/>, 
        <WiDayRainMix size='3.5em'/>, <WiDaySleetStorm size='3.5em'/>,
        <WiDaySleetStorm size='3.5em'/>, <WiDaySleetStorm size='3.5em'/>, <WiDayRain size='3.5em'/>, 
        <WiDayRain size='3.5em'/>, <WiDaySunny size='3.5em'/>,
        <WiDaySleet size='3.5em'/>, <WiDaySleet size='3.5em'/>, <WiDaySnow size='3.5em'/>, 
        <WiDaySnow size='3.5em'/>, <WiDaySnow size='3.5em'/>,  
        <WiNightClear size='3.5em'/>, <WiNightAltCloudy size='3.5em'/>, <WiNightAltCloudy size='3.5em'/>, 
        <WiNightAltCloudy size='3.5em'/>, <WiNightAltCloudy size='3.5em'/>,
        <WiNightAltCloudy size='3.5em'/>, <WiNightAltRain size='3.5em'/>, <WiNightAltRain size='3.5em'/>, 
        <WiNightAltSleetStorm size='3.5em'/>, <WiNightAltSleetStorm size='3.5em'/>, 
        <WiNightAltSnowWind size='3.5em'/>, <WiNightAltSnowWind size='3.5em'/>,
        <WiNightAltSleetStorm size='3.5em'/>, <WiNightAltSleetStorm size='3.5em'/>, 
        <WiNightAltSnowWind size='3.5em'/>, <WiNightAltSnowWind size='3.5em'/>          
        ]

        return icons[index - 1]
    }