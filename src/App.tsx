import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Card } from './components/card';
import { Header } from './components/header';
import { MembersPhoto } from './components/membersPhoto';
import { Cadastro } from './pages/Cadastro';
import { Login } from './pages/Login';
import { LoginOption } from './pages/LoginOption';
import { Questions } from './pages/Questions';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Cadastro /> */}

      <Login />

      {/* <Questions /> */}
    </>
  )
}

export default App
