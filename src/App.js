import React from 'react';
import {AddCalories} from './components/AddCalories';
import {CaloriesList} from './components/CaloriesList';
import {Current} from './components/Current';
import { Header } from './components/Header';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
    <Header/>
    <div className = 'container'>
    <Current/>
     <CaloriesList/>
     <AddCalories/>
    </div>
    </GlobalProvider>
  );
}
export default App;
