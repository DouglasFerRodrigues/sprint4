import React from 'react';
import { ContainerPage, TitlePage } from '../../components/Main';
import Unidades from '../../components/Unidades';

const PageUnidade = () => {
  return (
    <ContainerPage>
      <TitlePage>Unidades de produtos</TitlePage>
      <Unidades />
    </ContainerPage>
  );
};

export default PageUnidade;
