import React, { useState } from 'react';
import ProductList from './ProductList';
import dadosProdutos from '../../dados/product.json';
import { BtnDefault } from '../../components/Styled';

function Products() {
  const [listProducts, setProducts] = useState(dadosProdutos);

  return (
    <div>
      <h1>Cadastro de Produtos</h1>
      <form>
        <label>Nome do Produto </label>
        <input
          id="inputName"
          type="text"
          placeholder="Digite a descrição do produto"
        />
        <br />
        <label>Código de barras </label>
        <input
          id="inputCC"
          type="text"
          placeholder="Digite o código de barras do produto"
        />
        <br />
        <label>
          Tipo de Produto{' '}
          <select name="" id="tipoProdId">
            <option value="valor1">Limpeza</option>
            <option value="valor2" defaultValue>
              Secos e Molhados
            </option>
            <option value="valor3">Diversos</option>
          </select>
        </label>
        <br />
        <label>
          Ativo :
          <input type="checkbox" id="ativo" name="ckAtivo" value="Ativo" />
        </label>
        <BtnDefault>Inserir</BtnDefault>
      </form>
      <h2>Pesquisa de produtos</h2>
      <form action="">
        <label>Informe um nome ou código de barras : </label>
        <input type="search" name="" id="pesquisaProd" />
      </form>
      <ProductList listProducts={listProducts} />
      {/*     
      <hr />
      <ProductList listProducts={listProducts} /> */}
    </div>
  );
}

export default Products;
