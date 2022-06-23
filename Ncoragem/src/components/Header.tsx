import { PersonSimpleRun,MagnifyingGlass}from 'phosphor-react'
  
  export function Header(){
    return(
        <div className='flex items-center justify-around w-full py-5 bg-slate-900'>

        <div className=" font-bold text-white text-3xl flex items-center justify-start  ">
                    <PersonSimpleRun size={32} />
                    <h1>   REENCONTROS</h1>
                </div>

            <div className='mr-[350px] flex justify-center items-center' >
                <input className='w-[500px] h-10  bg-slate-900 text-white border text-center  text-lg border-white rounded' type="search" name="" id=""
                placeholder='Pesquisar por nome' />
                <MagnifyingGlass size={32} color="#ffffff"  />
            </div>

        </div>


       
    )
}