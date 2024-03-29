import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    
    if (budget - totalExpenses < 0){
        alert("You can not reduce the budget value less than spending")
    }

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency}   {budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;
