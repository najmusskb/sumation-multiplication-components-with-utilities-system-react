import React from 'react';

const Cosmeticprops = (props) => {
    const {name, price, id}=props.Cosmetic;
    return (
        <div>


            <h1>Name:{name}</h1>
            <p>id:{id}</p>
            <p>price:{price}</p>
            
        </div>
    );
};

export default Cosmeticprops;