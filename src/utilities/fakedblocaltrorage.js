// use local storage to mansge cart data
const addtodatabase=id=>{

    let ShoppingCart;
    // get the shoping cart from local storage
    const storedcart =localStorage.getItem('shoping-cart');
    if(storedcart){
    ShoppingCart=JSON.parse(storedcart)    }


    else{
        ShoppingCart={};
    }
    // add quantity
    const quantity = ShoppingCart[id]
;    if(quantity){
        // console.log("already esxist")
        const newQuantity=(parseInt(quantity) + 1);
        ShoppingCart[id]=newQuantity;
        // localStorage.setItem(id, newQuantity);
    }
    else{
        // console.log('new items')
        // localStorage.setItem(id,1);
        ShoppingCart[id]=1;
    }
    localStorage.setItem('shoping-cart',JSON.stringify(ShoppingCart));
}



const removefromDB=id=>{

    console.log('inside fake Db')
    const storedCart=localStorage.getItem('shoping-cart')
    if(storedCart){
        const shoppingCrt =JSON.parse(storedCart);
        if(id in shoppingCrt){
            delete shoppingCrt[id];
            console.log('exist in the cart')
        }

    }


    
}



export {addtodatabase,removefromDB}