// use local storage to mansge cart data
const addtodatabase=id=>{

    let ShoppingCart;
    // get the shoping cart 
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

export {addtodatabase}