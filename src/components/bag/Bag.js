import React from 'react';
import { subtraction } from '../../utilities/calculate';

const Bag = () => {

    const bag1=650;
    const bag2=200;
    const result=subtraction(bag1,bag2);

    return (
        <div>
            <h3>Bag components</h3>
            <p>Total Bag {result}</p>
        </div>
    );
};

export default Bag;