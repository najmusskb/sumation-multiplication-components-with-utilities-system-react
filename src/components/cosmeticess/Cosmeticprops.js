import React from 'react';

const Cosmeticprops = ({cos}) => {
    const {name, price, id}=cos;
    return (
        <div>


            <h1>Name:{name}</h1>
            <p>id:{id}</p>
            <p>price:{price}</p>
            
        </div>
    );
};

export default Cosmeticprops;