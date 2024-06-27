import React from 'react'
import Header from './Header'
import Footer from './Footer'
import AuthRouting from '../../routes/AuthRouting'
import WelcomePage from './Welcome'

const Layouts = () => {
  return (
 <>
 <div className="d-flex flex-column h-100">
      <Header />
        <div className="flex-grow-1 p-3">
        {/* <AuthRouting /> */}
        <WelcomePage />
        </div>
        <Footer />
      </div>
    
 </>
  )
}

export default Layouts
