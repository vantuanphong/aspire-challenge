import React from 'react'
import { Link } from 'react-router-dom';

const HomePage = () =>{
    return  (<> 
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 className="display-4">Need Money ?</h1>
    <p className="lead">Get up to $15,000 fast</p>
    
  </div>
  <div className="card-deck mb-3 text-center">
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">Personal Loans</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">15% <small className="text-muted">/ mo</small></h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li className="text-success">From $2,100 to $15,000</li>
          <li>Better value. Flexible. Fair.</li>
        </ul>
        <Link className="btn btn-lg btn-block btn-outline-success" to="/LoanPage/Personal">Get a personal loan</Link>
      </div>
    </div>
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">Freedom</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">10% <small className="text-muted">/ mo</small></h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li className="text-success">Line of credit up to $5,000</li>
          <li>Use available credit 24/7</li>
        </ul>
        <Link className="btn btn-lg btn-block btn-outline-success" to="/LoanPage/Freedom" >Get a freedom loan</Link>
      </div>
    </div>
  </div>
  </>)
 
}

export default HomePage