import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import HomePage from './HomePage';
import MainContainer from './LayoutTemplate/MainContainer';
import LoanPage from './LoanPage';

const App = ()=>{
 
return <BrowserRouter>
<MainContainer clasname="">
  <Route exact path="/" component={HomePage}/>
  <Route exact path="/loan" component={LoanPage}/>
</MainContainer>
</BrowserRouter>

}

export default App;
