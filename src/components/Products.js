import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import { CartContext } from '../context/CartContext';

export const Products = () => {
  // Move the useContext hook inside the functional component
  const { products } = useContext(ProductsContext);
  //console.log(products);

  //const data = useContext(CartContext); 
 // console.log(data);

   const {dispatch} = useContext(CartContext); 
 

  return (
    <>
      {products.length !== 0 && <h1>Products</h1>}
      <div className='products-container'>
        {products.length === 0 && <div>No Products To Display</div>}
        {products.map(product => (
          <div className='product-card' key={product.ProductID}>
            <div className='product-img'>
              <img src={product.ProductImg} alt="not found" />
            </div>
            <div className='product-name'>
              {product.ProductName}
            </div>
            <div className='product-price'>
              $ {product.ProductPrice}.00
          </div>
            <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
          </div>
        ))}
      </div>
    </>
  );
};

