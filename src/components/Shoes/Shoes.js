import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Shoes = () => {

    const first=10;
    const second=20;
    const result=multiply(first,second)
    const sumation=add(first,second)
    return (
        <div>
            <h3>This Is Shoes Compo</h3>
            <p>Tootal:{result}</p>
            <p>sumation:{sumation}</p>
            
        </div>
    );
};

export default Shoes;