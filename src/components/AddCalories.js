import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddCalories = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addCalories } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newCalories = {
      text,
      amount: +amount
    }

    addCalories(newCalories);
  }

  return (
    <>
      <h3>Add The Name of Food and Calories</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Enter Food Name</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Please Enter" />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
          >Enter calories<br/></label
           >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter calories..." />
        </div>
        <button className="btn">Add Food</button>
      </form>
    </>
  )
}