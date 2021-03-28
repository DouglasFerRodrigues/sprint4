import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ listProducts }) => {
  return (
    <div>
      {listProducts.map((prod) => {
        return <ProductItem key={prod.id} prod={prod} />;
      })}
    </div>
  );
};

export default ProductList;
