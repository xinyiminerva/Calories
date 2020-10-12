import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Current = () => {
  const { calories } = useContext(GlobalContext);

  const amounts = calories.map(cal => cal.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4> Your Total Calories Intake </h4>
      <h1 >{total}</h1>
    </>
  )
}