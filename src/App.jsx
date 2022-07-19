import { useState } from 'react';
import { isLuckyAndOrIsHappy } from '../index';

function App() {

  const [input, setInput] = useState(null);
  const [result, setResult] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setResult(isLuckyAndOrIsHappy(input));
  }

  return (
    <div className="flex flex-col py-40 items-center w-full h-screen my-0 mx-auto bg-[#FF8D54]">

      <h1 className="text-6xl text-center font-bold absolute top-4 text-white">Desafio Trinks</h1>

      <div className='md:w-1/2 md:max-w-[400px]'>


        <form className="flex flex-col gap-4 justify-center my-0 mx-auto" onSubmit={handleSubmit}>
          <input className="px-4 py-3 rounded-md focus:outline-none" type="number" onChange={(e) => setInput(e.target.value)} placeholder="Insira um número" />
          <button className="bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition-colors duration-150 ease-out" type="submit">OK</button>
        </form>

        {result &&
          <p className='mt-5 flex justify-center select-none items-center text-4xl font-bold text-[#FF8D54] bg-white p-4 rounded-md'>
            {input} =
            {result.at(0)
              ? <span title='Sortudo' className='text-4xl hover:bg-slate-100 p-2 rounded-md'>&#127808;</span>
              : <span title='Não-Sortudo' className='mr-4 text-4xl hover:bg-slate-100 p-2 rounded-md'>&#128078;&#127808;</span>}
            {result.at(1)
              ? <span title="Feliz" className='text-4xl hover:bg-slate-100 p-2 rounded-md'>&#128513;</span>
              : <span title="Não-Feliz" className='text-4xl hover:bg-slate-100 p-2 rounded-md'>&#128553;</span>}
          </p>
        }
      </div>

    </div>
  )
}

export default App
