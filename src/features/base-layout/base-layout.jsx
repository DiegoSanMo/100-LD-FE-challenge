import React from 'react'
import { Navbar } from '../../shared/index'

const BaseLayout = ({children}) => {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  )
}

export default BaseLayout