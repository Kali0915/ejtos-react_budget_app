import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency} = useContext(AppContext);
    // const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const budget_value = Number(event.target.value);

    
        dispatch({
            type: 'SET_BUDGET',
            payload: budget_value,
        });
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget {currency}</span>
            <input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
