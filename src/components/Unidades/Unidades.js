import React, { useState } from 'react';
import UnidadeList from './UnidadeList';
import dados_unidade from '../../dados/unidade.json';

function Unidades() {
  const [listUnidades, setListUnidade] = useState(dados_unidade);
  const [userInput, setUserInput] = useState('');

  const addUnidade = (userInput) => {
    let copy = [...listUnidades];
    copy = [...copy, { id: listUnidades.length + 1, task: userInput }];
    setListUnidade(copy);

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addUnidade(userInput);
    setUserInput('');
  };
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
    console.log(userInput);
  };

  return (
    <div className="App">
      <form>
        <h1>Lista de Unidades</h1>
        <label>
          Unidade :
          <input
            value={userInput}
            type="text"
            placeholder="Digite a nova Unidade"
            name="newItem"
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Inserir</button>
        </label>
        <hr />
        <UnidadeList listUnidades={listUnidades} />
      </form>
    </div>
  );
}

export default Unidades;
