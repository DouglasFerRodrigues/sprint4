import Unidade from '../../dados/unidade.json';

const ProductItem = ({ prod }) => {
  const DescricaoUnidade = Unidade.find((unid) => unid.id === prod.unidade_id);
  return (
    <div>
      {prod.description} Estoque de {prod.stock} {DescricaoUnidade.task}
    </div>
  );
};
export default ProductItem;
