export default function Modal({ handleModal }) {
    return (
        <div className='bg-black bg-opacity-40 w-full h-screen absolute top-0 left-0 flex justify-center items-center'>
            <div className='flex flex-col gap-2 w-[80%] md:w-[40%] min-h-[80vh] max-h-[80vh] md:min-h-[50vh] md:max-h-[60vh]  py-6 pl-6 absolute z-20 bg-white rounded-md'>
                <p onClick={handleModal} className='absolute -right-4 -top-4 z-40 bg-[#FF8D54] hover:bg-[#FF7D00] cursor-pointer text-white w-8 h-8 text-center rounded-full flex items-center justify-center font-bold'>X</p>
                <div className='overflow-y-scroll pr-6 flex flex-col gap-2'>
                    <h3 className='font-bold text-md'>Número Feliz:</h3>
                    <p>
                        Um número é considerado feliz, se em algum ponto a soma de seus dígitos ao quadrado equivale a 1:
                    </p>

                    <code className='bg-slate-100 p-2'>
                        Ex: 7 é um número feliz?
                        7² = 49
                        4² + 9² = 97
                        9² + 7² = 130
                        1² + 3² + 0² = 10
                        1² + 0² = 1
                    </code>
                    <p className='font-medium underline'>Logo, 7 é um número feliz.</p>
                    <h3 className='font-bold text-md mt-4'>Número Sortudo:</h3>
                    <p>Nós começamos com uma lista de inteiros começando em 1:</p>
                    <code className='bg-slate-100 p-2'>
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
                    </code>
                    <p>Então removemos todos os números com posição múltipla de 2 (todos números pares), deixando todos os inteiros ímpares:</p>
                    <code className='bg-slate-100 p-2'>
                        [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25]
                    </code>
                    <p>O segundo termo desta sequência é 3. Nós removemos então todos os números com posição múltipla de 3 que sobraram na lista:</p>
                    <code className='bg-slate-100 p-2'>
                        [1, 3, 7, 9, 13, 15, 19, 21, 25]
                    </code>
                    <p>O terceiro termo desta sequência é 7. Nós removemos então todos os números com posição múltipla de 7 que sobraram na lista:</p>
                    <code className='bg-slate-100 p-2'>
                        [1, 3, 7, 9, 13, 15, 21, 25]
                    </code>
                    <p>Se nós repetirmos este procedimento indefinidamente, os sobreviventes são os números sortudos:</p>
                    <code className='bg-slate-100 p-2'>
                        [1, 3, 7, 9, 13, 15, 21, 25]
                    </code>
                    <p className='font-medium underline'>Logo, 7 também é um número sortudo.</p>
                </div>
            </div>
        </div>
    )
}