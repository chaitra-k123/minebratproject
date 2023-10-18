
import './App.css';
import List from './List';
// import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import Result from './Result';
// import CitiesList from './CitiesList';
import React from 'react'
function App() {
  return (
    <div className="App">
      <List/>
     {/* <BrowserRouter>
     <Routes>
      <Route path="/" Component={List}/>
      <Route path="/:stateId/:stateName" Component={CitiesList}/>
      <Route path="/:stateId/:stateName/:nameOfState/:cityName" Component={Result}/>
      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
