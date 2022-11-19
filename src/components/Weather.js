import { useState } from "react";
import API_KEY from 'dotenv'



function Weather() {
    
const [city, setCity] = useState('dallas');

let api = "http://api.openweathermap.org/geo/1.0/direct?q=" + city +"&limit=1&appid=" + API_KEY;

 const callAPI = (e) => {
    setCity(e.city)
}
    return(
        <div>
            <form onSubmit={callAPI}>
                <label for="cityInput">Enter Your City</label>
                <input type="text" className="cityInput" name="cityInput" value={city}></input>
                <button type="submit" className="btn" name="submitBtn">Submit</button>
            </form>
        </div>
    );
};

export default Weather;