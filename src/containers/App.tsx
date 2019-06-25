import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import HomePage from './HomePage'
import MainContainer from './LayoutTemplate/MainContainer'
import LoanPage from './LoanPage'
import AcceptPage from './AcceptPage'
import RepayPage from './RepayPage'

const App = () => {
  return (
    <BrowserRouter>
      <MainContainer>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/AcceptPage" component={AcceptPage} />
        <Route exact path="/LoanPage/:tittle" component={LoanPage} />
        <Route exact path="/RepayPage" component={RepayPage} />
      </MainContainer>
    </BrowserRouter>
  )
}

export default App
