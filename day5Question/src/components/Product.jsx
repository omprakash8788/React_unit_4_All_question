// import module.css here;



const Product = ({name,price,quantity,id,handleQty}) => {


  return (
    <>
      <div  data-testid="product-container">
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
