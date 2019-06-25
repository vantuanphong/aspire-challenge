import React from 'react'
import LoanForm from '../components/LoanForm'
import { createLoan } from '../services/loan.services'
import Itable from '../interface/Itable'
import ArlertComp from '../components/arlertComp'
const LoanPage: React.FC = () => {
  const _onSubmit = async (values: any) => {
    let iTable: Array<Itable> = [
      {
        amount: values.amount,
        fullName: values.fullName,
        isApprove: values.isApprove,
        loanTerm: values.loanTerm,
        paymentsPerMonth: Math.round(
          parseInt(values.amount) / parseInt(values.loanTerm)
        )
      }
    ]
    const res = await createLoan(iTable)
    console.log(res)
  }

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="wrap-banner-slogan">
            <h1 className="text-success">
              Get up to <br className="hidden-xs" />
              $15,000 <span className="hidden-xs">fast</span>
            </h1>
            <div className="list-slogan hidden-xs">
              <p className="text-black-50 light">
                <i className="fa fa-check-circle" /> &nbsp;Better value, no
                hidden charges
              </p>
              <p className="text-black-50 light">
                <i className="fa fa-check-circle" /> &nbsp;Fast and easy, quick
                decision online
              </p>
              <p className="text-black-50 light">
                <i className="fa fa-check-circle" /> &nbsp;Convenient, straight
                to your bank
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <LoanForm onSubmit={(values: any) => _onSubmit(values)} />
          <ArlertComp />
        </div>
      </div>
    </>
  )
}

export default LoanPage
