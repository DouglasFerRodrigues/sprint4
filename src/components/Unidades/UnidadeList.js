import React from 'react';
import UnidadeItem from './UnidadeItem';

const UnidadeList = ({ listUnidades }) => {
  return (
    <div>
      {listUnidades.map((unid) => {
        return <UnidadeItem key={unid.id} unid={unid} />;
      })}
    </div>
  );
};

export default UnidadeList;
