import {useState} from 'react'

const SendGeo = () =>{
    const [lat,setLat] = useState(null)
    const [long,setLong] = useState(null)
    const [error,setError] = useState(null)
    
    const geolocationAPI = navigator.geolocation;
    const getUserCoordinates = () => {
        if(!geolocationAPI){
            setError('Geolocation API is not available in your browser!')
        }
        else{
            geolocationAPI.getCurrentPosition((position)=>{
                const {coords} = position
                setLat(coords.latitude)
                setLong(coords.longitude)    
            },(error)=>{
                setError()
            })
        }
    }
    
    return(
        <div>
            <h1>Geo Location</h1>
        </div>
    )

}
export default SendGeo