import React from 'react'
import {useState} from 'react';
import {Form,FormControl,Button} from 'react-bootstrap';
import './style.css';


export default function Wheather() {

    const API_KEY = process.env.REACT_APP_API_KEY;

    const [data,setData] = useState();
    const [city, setCity] = useState("");


    const fetchAPI= async()=>{
        if(city === "") {
            alert("Enter City Name");
        }
        else{
            console.log(API_KEY);
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
            const reccivedata = await fetch(url);
            const datajson = await reccivedata.json();
            // console.log(data.message);
            setData(datajson);
            // return datajson;
        }
        
    }

    // const validate=() => {
    //     // city = city.trim();
    //     if(city === "") {
    //         alert("Enter City Name");
    //     }
    //     else {
    //         const res = fetchAPI
    //         if (res.cod !== 200) {
    //             alert("City Not found")
              
    //         }
    //         else {
    //             setData(res)
    //         }
    //     }
    // }
    
    
    // const {}

    return (
        <div className="container my-4 px-0">

        
            <div className="row">
                <div className="col-lg-3  opacity-outer image">
                        
                </div>
                                   
                <div className="col-lg-9 content">
                     <div className="mx-0">
                        <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Enter City Name"
                            className="mx-2 my-2"
                            aria-label="Search"
                            name="city"
                            onChange={(e)=>setCity(e.target.value)}
                        />
                        <Button variant="success" className="my-2"  onClick={fetchAPI}>Search</Button>                        
                        </Form>
                    </div> 
                    <div className="mx-4 text-center content-data">
                    {
                            !(data)?(
                                <div class="alert alert-danger" role="alert">
                                        City Not Found
                                        {/* {data.message} */}
                                </div>
                            ):(
                                 <ul>
                                    <li>  <i class="fas fa-map-marker-alt"></i>   {data.name}</li>
                                    <li>  Temp :  {data.main.temp} </li>
                                    <li> <i class="fas fa-temperature-half"></i> Feel Like:  {data.main.feels_like}°C</li>
                                    <li> <i class="fas fa-temperature-low"></i> Min Temp:  {data.main.temp_min}°C</li>
                                    <li> <i class="fas fa-temperature-high"></i> Max Temp:  {data.main.temp_max}°C</li>
                                    <li> <i class="fas fa-tint"></i> Humidity: {data.main.humidity}%</li>
                                    <li> <i class="fas fa-cloud"></i> Sky: {data.weather[0].description}</li>
                                    {/* <li>{data.cod}</li> */}
                                </ul>
                                
                            )
                        }
                        
                    </div>

                    </div>
            </div>
        </div>
    )
}
