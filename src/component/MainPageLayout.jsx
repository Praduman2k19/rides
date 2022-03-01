import React from 'react'
import Home from './Home'

const MainPageLayout = ({children}) => {
  return (
    <div>
        <Home />
        {children}
    </div>
  )
}

export default MainPageLayout