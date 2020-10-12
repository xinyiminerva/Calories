import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Cal = ({ cal }) => {
 
  return (
    <li className={'plus'}>
      {cal.text}
       <span>{Math.abs(cal.amount)}</span>
    </li>
  )
}