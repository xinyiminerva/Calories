import React, { useContext } from 'react';
import { Cal } from './Cal';

import { GlobalContext } from '../context/GlobalState';

export const CaloriesList = () => {
  const { calories } = useContext(GlobalContext);

  return (
    <>
      <h3>Food History</h3>
      <ul className="list">
        {calories.map(cal=> (<Cal cal ={cal} />))}
      </ul>
    </> 
  )
}