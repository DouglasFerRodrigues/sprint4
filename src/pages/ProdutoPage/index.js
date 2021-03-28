import React from 'react';
import { ContainerPage, TitlePage } from '../../components/Main';
import Products from '../../components/Products';

const PageProduto = () => {
  return (
    <ContainerPage>
      <TitlePage>Produtos</TitlePage>
      <Products />
    </ContainerPage>
  );
};
export default PageProduto;
