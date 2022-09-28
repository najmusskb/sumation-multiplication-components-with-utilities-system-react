import React from 'react';
import Cosmeticprops from '../cosmeticess/Cosmeticprops';

const Cosmetics = () => {
   const Cosmeties= [
    {
      "id": "6333ec697c4e8b79e7b238ef",
      "price": 99,
      "name": "Case Espinoza"
    },
    {
      "id": "6333ec6991435cabfc70afb1",
      "price": 172,
      "name": "Ursula Thompson"
    },
    {
      "id": "6333ec690298cc3a610581d9",
      "price": 363,
      "name": "Carpenter Church"
    },
    {
      "id": "6333ec69c68dedffe3998486",
      "price": 404,
      "name": "Imelda Jarvis"
    },
    {
      "id": "6333ec69fb1cfe6002246e85",
      "price": 75,
      "name": "Stefanie Zimmerman"
    }
  ]

    return (
        <div>
        <h1>okkkkkkkkkk</h1>
        {
            Cosmeties.map(Cosmetic=> <Cosmeticprops></Cosmeticprops>)
        }
        </div>

    );
};

export default Cosmetics;