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
    <Header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
    <ul className="nav">
        <li className="nav-item"><Link className="nav-link active" to="/"><img style={{height:'25px'}} alt="" src={logoImg}></img></Link></li>
        <li className="nav-item"><Link className="nav-link" to="/loan"><NavBar>Accept Loan</NavBar></Link></li>
        <li className="nav-item"><Link className="nav-link" to="/Repay"><NavBar>Repay</NavBar></Link></li>
      </ul></Header>)
}

export default HeaderComp