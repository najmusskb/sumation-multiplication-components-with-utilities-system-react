import React from 'react';
import { addtodatabase } from '../../utilities/fakedblocaltrorage';
import './cosmeticessss.css'

const Cosmeticprops = ({cos}) => {
    const {name, price, id}=cos;
    const addtoCart=(id)=>{
        addtodatabase(id)
    }

    // const addToCartWithparameter=()=>addtoCart(id)
    return (
        <div className='product'>
            <h1>Name:{name}</h1>
            <p>id:{id}</p>
            <p>price:{price}</p>
            {/* <button onClick={addToCartWithparameter}>Add to cart</button> */} 
            <button onClick={()=>addtoCart(id)}>Add to cart</button>
         
            
        </div>
    );
};

export default Cosmeticprops;