import React from 'react';
import { add } from '../../utilities/calculate';
// import add from '../../utilities/calculate';


const Cosmetics = () => {
    const first=55;
    const second=50;
    const total=add(first,second)

    return (
        <div>
            <h1>Welcome To My Cosmetics Storage</h1>

            <p>Total: {total}</p>
        </div>
    );
};

export default Cosmetics;