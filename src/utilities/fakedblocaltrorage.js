// use local storage to mansge cart data
const addtodatabase=id=>{
    const quantity = localStorage.getItem(id);
    if(quantity){
        console.log("already esxist")
        const newQuantity=(parseInt(quantity) +1);
        localStorage.setItem(id,newQuantity);
    }
    else{
        console.log('new items')
        localStorage.setItem(id,1);
    }



}

export {addtodatabase}