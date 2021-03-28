import React, { useState } from 'react';
import dados_product from '../../dados/product.json';
import ProductList from './ProductList.js';

function Products() {
  const [listProducts, setListProducts] = useState(dados_product);
  const [userInputDesc, setUserInputDesc] = useState('');

  function handleSubmit(e) {}
  function handleChange(e) {}
  return (
    <div className="App">
      <form>
        Teste
        <br />
        <label>
          Descrição do Produto :
          <input
            type="text"
            placeholder="Digite a descrição do produto"
            name="newProduct"
          ></input>
          <label>
            Unidade
            <select name="unidProduct">
              <option value="1">Pacote</option>
              <option value="2">Unidade</option>
              <option value="3">Lata</option>
            </select>
          </label>
          <label>
            Quantidade em estoque :<input type="text"></input>
          </label>
          <button onClick={handleSubmit}>Inserir</button>
        </label>
        <hr />
        <ProductList listProducts={listProducts} />
      </form>
    </div>
  );
}

export default Products;
