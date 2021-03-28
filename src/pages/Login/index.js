import React, { useState } from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import { BtnDefaultIco, BtnDefault } from '../../components/Styled';
import { AreaLogin } from './styled';
import FacebookIcon from '@material-ui/icons/Facebook';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Api from '../../Api';

const Login = ({ onReceive }) => {
  const [userInputEmail, setUserInputEmail] = useState('');
  const [userInputPwd, setUserInputPwd] = useState('');

  const actionLogInternal = (e) => {
    e.preventDefault();
    let data = {
      uid: 0,
      displayName: userInputEmail,
      avatar: '',
      passwd: userInputPwd,
    };

    if (userInputEmail === 'douglas@cnr.com.br' && userInputPwd === '123') {
      onReceive(data);
    } else {
      alert('Erro de autenticação');
    }
  };

  const actionLoginGoogle = async () => {
    let result = await Api.googleLogar();
    if (result) {
      onReceive(result.user);
    } else {
      alert('Erro!');
    }
  };

  const actionLogin = (e) => {
    if (e.target.id === 'btnInternal') {
      actionLogInternal(e);
    } else {
      actionLoginGoogle();
    }
  };

  const handleChangeEmail = (e) => {
    setUserInputEmail(e.currentTarget.value);
  };

  const handleChangePwd = (e) => {
    setUserInputPwd(e.currentTarget.value);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/register">
          <AreaLogin>
            <h1>
              <ArrowBackIcon />
              Crie sua conta
            </h1>
            <p>Crie sua conta. é gratis</p>
            <form className="form-input">
              <div>
                <label>Nome </label>
                <input type="text" />
              </div>
              <div>
                <label>E-mail </label>
                <input
                  type="email"
                  id="nickName"
                  onChange={handleChangeEmail}
                />
              </div>
              <div>
                <label>Senha </label>
                <input type="passwd" id="password" onChange={handleChangePwd} />
              </div>
              <BtnDefault type="submit">Começe aqui</BtnDefault>
              <div className="footerLogin">
                Já tem uma conta ?<Link to="/">Faça login</Link>
              </div>
            </form>
          </AreaLogin>
        </Route>
        <Route exact path="*">
          <AreaLogin>
            <h1>Faça login em sua conta</h1>
            <BtnDefaultIco>
              <FacebookIcon />
              <div className="center">Fazer Login com Facebook</div>
            </BtnDefaultIco>
            <BtnDefaultIco>
              <GTranslateIcon />
              <div className="center" onClick={actionLogin}>
                Fazer Login com Google
              </div>
            </BtnDefaultIco>
            <p>OU</p>
            <form className="form-input">
              <div>
                <label>E-mail </label>
                <input type="email" onChange={handleChangeEmail} />
              </div>
              <div>
                <label>Senha </label>
                <input type="passwd" onChange={handleChangePwd} />
              </div>
              <BtnDefault id="btnInternal" onClick={actionLogin}>
                Entrar
              </BtnDefault>
              <div className="footerLogin">
                Não tem uma conta ?<Link to="/register">Registre-se</Link>
              </div>
            </form>
          </AreaLogin>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Login;
