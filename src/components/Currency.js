import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Currency() {
    const { dispatch, currency } = useContext(AppContext);
    const [visible, setVisible] = useState(false);

    const setCurrency = (currency) => {
        setVisible(!visible);
        txt_currency();

        dispatch({
            type: "CHG_CURRENCY",
            payload: currency,
        });
    };

    const txt_currency = () => {
        switch (currency) {
            case '$':
                return "$ Dollar";
            case '£':
                return "£ Pound";
            case '€':
                return "€ Euro";
            case '₹':
                return "₹ Ruppee";
            default:
                return "";
        }
    };
    return (
        <div>
            <button className='alert alert-success' onClick={() => setVisible(!visible)}>
                Currency ({txt_currency()})
            </button>
            <ul className={`custom-menu dropdown-menu ${visible ? "show" : ""} `}>
                <li>
                    <button className='dropdown-item' onClick={() => setCurrency("$")}>
                        $ Dollar
                    </button>
                </li>
                <li>
                    <button className='dropdown-item' onClick={() => setCurrency("£")}>
                        £ Pound
                    </button>
                </li>
                <li>
                    <button className='dropdown-item' onClick={() => setCurrency("€")}>
                        € Euro
                    </button>
                </li>
                <li>
                    <button className='dropdown-item' onClick={() => setCurrency("₹")}>
                        ₹ Ruppee
                    </button>
                </li>
            </ul>
        </div>

    );
};
export default Currency;
