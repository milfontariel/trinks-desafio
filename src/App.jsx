import { useState } from 'react';
import { isLuckyAndOrIsHappy } from '../index';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './components/Modal';

function App() {

  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (result) {
      setResult(null);
      setInput('');
    } else {
      if (input === null || input === '') {
        toast('Insira um número!');
        return
      }
      setResult(isLuckyAndOrIsHappy(input));
    }
  }

  function handleModal() {
    setShowInfo(!showInfo);
  }

  return (
    <div className="flex flex-col py-40 items-center w-full h-screen my-0 mx-auto bg-[#FF8D54]">

      <h1 className="text-6xl text-center font-bold absolute top-4 text-white">
        Desafio Trinks
      </h1>
      <div className='md:w-1/2 md:max-w-[400px]'>
        <div className='flex justify-center gap-2'>
          <h2 className="text-center mb-4 text-2xl font-bold text-white underline">
            Meu número é sortudo e feliz?
          </h2>
          <p onClick={handleModal} className='w-8 h-8 bg-white bg-opacity-40 hover:bg-opacity-100 cursor-pointer transition-all duration-150 ease-in-out text-center rounded-full font-bold text-2xl text-slate-700'>i</p>
        </div>
        <form className="flex flex-col gap-4 justify-center my-0 mx-auto" onSubmit={handleSubmit}>
          <input className="px-4 py-3 rounded-md focus:outline-none" disabled={result} type="number" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Insira um número" />
          <button className={`bg-green-600 ${result && 'bg-orange-600 hover:bg-orange-700'} text-white p-2 rounded-md hover:bg-green-700 transition-colors duration-150 ease-out`} type="submit">
            {result ? 'APAGAR' : 'CHECAR'}
          </button>
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
      {showInfo &&
        <Modal handleModal={handleModal} />
      }
      <ToastContainer />
    </div>
  )
}

export default App
