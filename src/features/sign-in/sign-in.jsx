import React from 'react'

export default function Signin() {
  return (
    <div className="bg-white w-full flex h-screen">
        <div className='w-1/2'>
          <img className='w-[524px] h-screen' src="https://mymodernmet.com/wp/wp-content/uploads/2020/01/Angel-de-la-Independencia-3.jpg" alt="" />
        </div>
        <div className=" pt-[72px] w-[320px]">
          <span className='font-semibold text-xl'>Create tu cuenta</span>
          <p className='mt-[24px] w-full'>
            Al aceptar crear una cuenta en 100 Ladrillos aceptas nuestro <a className="text-[#3ca4fc]"> Aviso de Privacidad, Derechos Arco  </a>y nuestros <a className="text-[#3ca4fc]">Términos y Condiciones.</a>
          </p>
          <form action="" className='mt-[24px]'>
            <div className='flex flex-col'>
              <label className='mb-[8px]' >¿Cuál es tu correo electrónico?</label>
              <input type="text" className='border rounded h-[40px] p-[8px]' placeholder='tu@correo.com' />
            </div>
            <div className='flex flex-col mt-[24px]'>
              <label className='mb-[8px]'>Ingresa una contraseña</label>
              <input type="text" className='border rounded h-[40px] p-[8px]' placeholder='Contraseña'/>
            </div>
          </form>
          <div className='flex flex-col justify-center align-middle w-full mt-[24px]'>
            <div className="flex flex-row w-full justify-between">
              <span className="w-full h-[1px] bg-gray-200"></span>
              <span className='inline-flex justify-center align-middle w-full'>o regístrate con:</span>
              <span className="w-full h-[1px] bg-gray-200"></span>
            </div>
            <div className='flex justify-between align-middle items-center w-full'>
              <img className='w-[48px] h-[48px] p-[8px]' src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="" />
              <img className='w-[48px] h-[48px] p-[8px]' src="https://cdn-icons-png.flaticon.com/512/732/732221.png" alt="" />
              <img className='w-[48px] h-[48px] p-[8px]' src="data:image/png;base64,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" alt="" />
            </div>
          </div>
        </div>
      </div>
  )
}