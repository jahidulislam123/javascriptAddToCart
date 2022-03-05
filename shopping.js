

// function tomar(){
//     console.log('clicked');

// }
const displaylocalStorageCart=()=>{
const cart =getcart();
for(const name in cart){
    displayProduct(name);
} 

}

const addItem=()=>{
   const nameFiled =document.getElementById('Product-name') ;
   const name =nameFiled.value ;
   if(!name){
       return;
       //ekhane return deoar mane hocce function theke 
       //ber hoye jaoa ar onno kono function e kaj e korbena 
   }
   //display in the ui
   displayProduct(name);
   
   //add to local storage
   addProductTocart(name);

   
   //clear
   nameFiled.value='';
}



const displayProduct =name =>{
    const ul =document.getElementById('products');
    const li =document.createElement('li');
    li.innerText=name;
    ul.appendChild(li);
    

}

const getcart =()=>{
  const cart=  localStorage.getItem('cart');
  let cartObj;
  if(cart){
     cartObj=JSON.parse(cart);
  }else{
      cartObj={};
  }
  return cartObj;
}

const addProductTocart = name =>{
    const cart =getcart();
    // cart[name]=1;
    if(cart[name]){
       cart[name]=cart[name]+1; 
    }
    else{
        cart[name]=1;
    }
    const caryStringify =JSON.stringify(cart);
    localStorage.setItem('cart',caryStringify);
}

const placeOder=()=>{
    document.getElementById('products').textContent='';
    localStorage.removeItem('cart');
}


displaylocalStorageCart();
