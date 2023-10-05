// import module.css here;

import "./product.module.css"

const Product = ({name,price,quantity,id,handleQty}) => {

  return (
    <>
      <div style={{border:"1px solid red", display:"flex" ,margin:"auto", alignItems:'center', marginLeft:"398px", marginRight:"398px", padding:"10px", paddingLeft:"83px", gap:"15px"}}  data-testid="product-container">
        <h2 data-testid="product-name">{name}</h2>
        <h2 data-testid="product-price">{price}</h2>
        <button onClick={()=>handleQty(id, 1, name)} data-testid="quantity-increment">+</button>
        <h2 data-testid="product-quantity">{quantity}</h2>
        <button disabled={quantity === 0} onClick={()=>handleQty(id, -1, name)} data-testid="quantity-decrement">-</button>
      </div>
    </>
  );
};
export default Product;
