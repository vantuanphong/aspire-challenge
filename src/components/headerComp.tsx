import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImg from '../access/img/Aspire.png'
const Header = styled.section`
    background-color: #fcfcfc;
    border-bottom: 1px solid #b5b5b5;
`;
const NavBar = styled.span`
color: black;

&:hover {
  color: green; 
}

`;
const HeaderComp = () =>{
    return (
        <Header className="site-header sticky-top py-1">
        <div className="container d-flex flex-column flex-md-row justify-content-between">
       <ul className="nav">
        <li className="nav-item"><Link className="nav-link active" to="/"><img style={{height:'25px'}} alt="" src={logoImg}></img></Link></li>
        <li className="nav-item"><Link className="nav-link" to="/AcceptPage"><NavBar>Accept Loan</NavBar></Link></li>
        <li className="nav-item"><Link className="nav-link" to="/RepayPage"><NavBar>Repay</NavBar></Link></li>
      </ul>
      </div>
      </Header>)
}

export default HeaderComp