import { useState } from 'react';
import { Card } from './components/card';
import { Header } from './components/header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <main className="flex justify-between items-center mx-[10%] py-8 w-[80%] h-[85%]">
          <img src="../../public/icons-svg/engineering_team.svg" alt="Ilustração" className="mt-40 w-[500px] h-[500px] max-h-screen max-w-screen" />
          <p className="text-zinc-400 text-justify w-[960px] mt-40 px-20">
            Temos como objetivo fazer uma auditoria interna na empresa para que assim a empresa possa analisar o quão distante ela esta de conseguir a certificação da ISO 27002.
          </p>
      </main>

      <section className="">
        {/* degrade entre um preto ou cinza e um roxo escuro */}
      </section>

      <section className="flex flex-col justify-center items-center h-[85%]">
        <p className="text-2xl pb-16">Conheça nossos planos</p>
        {/* <img src="" alt="animação" /> */}
        {/* <script src="https://cdn.lordicon.com/fudrjiwc.js"></script> */}
        {/* <lord-icon
            src="https://cdn.lordicon.com/pimvysaa.json"
            trigger="loop"
            style="width:250px;height:250px">
        </lord-icon> */}
        <div className="flex max-w-[80%]">
          <Card />
          <Card />
          <Card />
        </div>
      </section>

      <section className="">
        {/* degrade entre um preto ou cinza e um roxo escuro volta */}
      </section>

      <section className="flex flex-col justify-center items-center h-[85%] mt-40">
        <p className="">Nossa Equipe</p>
      </section>

      <footer>
        <p>Desenvolvido por SEGMA6 - 2023</p>
      </footer>
    </>
  )
}

export default App
