
import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route, Form} from 'react-router-dom';
import Home from './components/Home';

import Layout from './Layout/Layout';
import Abc from './components/Abc';
import WeatherDashboard from './components/WeatherDashboard';
import Front from './components/Front';
import { Themeprovider } from './components/Themeprovider';
import WorldDash from './components/WorldDash';
import Frontpage from './components/Frontpage';
import TopCities from './components/TopCities';
import Feedback from './components/Feedback';
function App() {
  return (
    <Themeprovider>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout/>}>
    <Route path='/abc' element={<Abc/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/weather' element={<TopCities/>}/>
    <Route path='/Form' element={<Frontpage/>}/>
    <Route path='/world' element={<WorldDash/>}/>
    <Route path='/world1' element={<Feedback/>}/>
    
    </Route>
    </Routes>
    </BrowserRouter></Themeprovider>
  
  );
}

export default App;
