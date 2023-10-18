import React, { useEffect, useState } from "react";
import Result from "./Result";
const CitiesList = ({ stateId, stateName }) => {
  const [cities, setCities] = useState(null);
  const [cityName, setCityName] = useState("");
  const [displayResult, setDisplayResult] = useState(false);
  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch(
        `http://api.minebrat.com/api/v1/states/cities/${stateId}`
      );
      const data = await response.json();
      setCities(data);
    };
    fetchCities();
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayResult(true);
  };
  const optionChange = (e) => [setCityName(e.target.value)];
  return (
    <div>
      <form>
        <select onChange={optionChange}>
          {cities &&
            cities.map((state) => {
              return <option key={state.cityId}>{state.cityName}</option>;
            })}
        </select>
        <button onClick={handleSubmit}>submit</button>
      </form>
      <div>
        {displayResult && <Result stateName={stateName} cityName={cityName} />}
      </div>
    </div>
  );
};

export default CitiesList;

// with routing
// import React,{useEffect,useState} from 'react'
// import {useParams, useNavigate} from 'react-router-dom'
// const CitiesList = () => {
//     const {stateId,stateName} = useParams()
//     const navigate = useNavigate()
//     const [cities,setCities] = useState(null)
//     const [cityName,setCityName] = useState("")
//     useEffect(()=>{
//         const fetchCities = async ()=>{
//             const response = await fetch(`http://api.minebrat.com/api/v1/states/cities/${stateId}`);
//             const data = await response.json()
//             console.log(data)
//             setCities(data)
//         }
//         fetchCities()
//     },[])
//     const handleSubmit = ()=>{
//         console.log(cityName)

//         navigate(`/:stateId/:stateName/${stateName}/${cityName}`)

//     }
//   return (
//     <div>
//         <form >
//         <select onChange={(e)=>{console.log(e);
//           console.log(e.target.value);
//           setCityName(e.target.value)
//         }}>

// {cities && cities.map((state)=>{
//     return(
//         <option key={state.cityId}>{state.cityName}</option>
//     )
// })}

//           </select>
//           <button onClick={handleSubmit}>

//             submit

//           </button>
//           </form>
//     </div>
//   )
// }

// export default CitiesList
