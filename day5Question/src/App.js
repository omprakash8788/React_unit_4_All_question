import { useState } from "react";
import "./App.css";
import Product from "./components/Product";
import data from "./db.json";

///console.log(data);

function App() {
  const [product, setProduct ] = useState(data)

  const handleQty = (id, payload, name) => {
    let newData = product.map((item)=>item.id===id ? {...item, quantity: item.quantity+payload}: item)
    setProduct(newData)
    console.log(newData);
   }
   let total=0;
   for(let i=0; i<product.length; i++){
    total+=product[i].quantity * product[i].price
   }
  console.log(product)
  return (
    <div className="App" data-testid="app">
      <div data-testid="cart-products">
        {/*  map through the  data and pass props to the Product component */}
        {product.map((item) => {
          return <Product key={item.id} {...item} handleQty={handleQty} />;
        })}

  
      </div>

      <h1 id="total-cart" data-testid="total-cart">
        {/* Show the total of the Cart(a actual Price of a Product = price * quantity) */}
        Total:{total}
      </h1>
    </div>
  );
}

export default App;
