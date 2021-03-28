import React from 'react';
import { Link } from 'react-router-dom';
import { AreaHerader } from './styled';

function Header(props) {
  return (
    <>
      <AreaHerader>
        <div className="container">
          <div className="logo">
            <img src="../../../code_150x150.png" alt="icone do VSCode" />
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Início</Link>
              </li>
              <li>
                <Link to="/Produto">Produtos</Link>
              </li>
              <li>
                <Link to="/Unidade">Unidades</Link>
              </li>
              <li>Sair</li>
            </ul>
            <div className="avatar">
              <img src={props.user.avatar} alt="imagem do usuario" />
              <label>{props.user.name}</label>
            </div>
          </nav>
        </div>
      </AreaHerader>
    </>
  );
}

export default Header;
