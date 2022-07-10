import React from 'react'

export default function Navbar() {
  return (
    <nav className='list-none flex flex-row justify-between w-full border-b'>
      <li className='ml-[24px] mx-[11.7px]'>Logo</li>
      <div className="flex flex-row w-1/4">
        <li className='text-[#ff5a60] px-[32px] py-[14px] rounded-[30px] transition ease-in-out delay-100 hover:bg-[#ff5a60] hover:text-[#fff] duration-300 mr-[24px]'>
          <span>Cómo funciona</span>
        </li>
        <li className='text-[#ff5a60] px-[32px] py-[14px] rounded-[30px] transition ease-in-out delay-100 hover:bg-[#ff5a60] hover:text-[#fff] duration-300'>
          <span>Entrar</span>
        </li>
      </div>
    </nav>
  )
}
