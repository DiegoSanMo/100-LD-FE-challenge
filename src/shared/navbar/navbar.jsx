import React from 'react'
import Button from '../../components/button/button';

export default function Navbar() {
  return (
    <nav className='list-none flex flex-row justify-between w-full border-b'>
      <li className='ml-[24px] mx-[11.7px]'>Logo</li>
      <div className="flex flex-row w-1/4">
        <Button text={"Cómo funciona"}/>
        <Button text={"Entrar"}/>
      </div>
    </nav>
  )
}
