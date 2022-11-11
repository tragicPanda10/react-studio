import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import menuItem from "./components/BakeryItem.js";
import  Button from '@mui/material/Button';
import { Grid } from "@mui/material";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [cart, addCart] = useState([]);
  const [total, addTotal] = useState(0);
  
  function handleCart(item) {
      addTotal(total + item.price);
      addCart([...cart, {
        "name": item.name,
        "quantity": 1
      },]);
  }

function sumCart() {
  let sum=[];
  for(let i =0; i<cart.length; i++) {
    if(sum.includes(cart[i])) {
      sum[sum.indexOf(cart[i])] = {
        "name": cart[i].name,
        "quantity": cart[i].quantity + 1
      };
    }
    else {
      sum = [...sum, cart[i], ]
    }
  }

  return(sum);
}

 function dispCart() {
  if(cart.length !==0) {
    return(
    <div class="cart-items">
      {sumCart().map((element) => {
        return(
        <div>
          {element.name} x{element.quantity}
        </div>);
      })}
    </div>
    );}
  }
  
  return (
    <div className="App">
      <div class="main-body">
        <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
        <Grid container rowSpacing={1} columnSpacing={1}>
          {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          <Grid item xs={6}>
            <div class="card">
              {menuItem(index, bakeryData)}
              <Button size="small" variant="contained" color="secondary" onClick={() => {handleCart(item)}}>Add to cart</Button>
            </div> 
          </Grid>
          
        ))}</Grid>
      </div>
      

      <div class="cart">
        <h2>Cart</h2>
          {dispCart()}
        <div id="total">
          Total: ${total.toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export default App;
