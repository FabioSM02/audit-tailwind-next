import { useState } from 'react';
import { Header } from './components/header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <main className="flex justify-between items-center mx-[10%] py-8 w-[80%] h-[85%]">
          <img src="../../public/icons-svg/engineering_team.svg" alt="Ilustração" className="mt-40 w-[500px] h-[500px]" />
          <p className="text-zinc-400 text-justify w-[960px] mt-40 px-20">
            Temos como objetivo fazer uma auditoria interna na empresa para que assim a empresa possa analisar o quão distante ela esta de conseguir a certificação da ISO 27002.
          </p>
      </main>

      <section className="">
        {/* degrade entre um preto ou cinza e um roxo escuro */}
      </section>

      <section className="flex justify-center items-center h-[85%]">
        <p>Conheça nossos planos</p>
      </section>

      <section>
        {/*  */}
      </section>

      <footer>

      </footer>
    </>
  )
}

export default App
