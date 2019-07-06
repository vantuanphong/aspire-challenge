import React, { useState } from 'react'
import LoanForm from '../components/LoanForm'
import { createLoan } from '../services/loan.services'
import ITable from '../interface/ITable'
import AlertComp from '../components/alertComp'
import IAlert from '../interface/IAlert'
import { sleep } from '../services/util'
const LoanPage: React.FC = () => {
  const [alert, setAlert] = useState<Array<IAlert>>([])
  const [handleAlert, setHandleAlert] = useState(false)

  const _onSubmit = async (values: any) => {
    let _message = isValid(values)
    if (_message) {
      setAlert([
        {
          message: _message,
          variant: 'danger'
        }
      ])
      handleShow()
    } else {
      let _totalAmount =
        Number(values.amount) + (Number(values.amount) * 15) / 100
      let ITable: Array<ITable> = [
        {
          amount: _totalAmount,
          fullName: values.fullName,
          isApprove: values.isApprove,
          loanTerm: values.loanTerm,
          paymentsPerWeek: Math.round(
            _totalAmount / Number(values.loanTerm) / 4
          )
        }
      ]
      const res = await createLoan(ITable)
      if (res) {
        setAlert([
          {
            message: 'Create loan successful !',
            variant: 'success'
          }
        ])
        handleShow()
      }
      console.log(res)
    }
  }

  const isValid = (values: any) => {
    let message = ''
    if (!values.fullName) {
      message = 'Fullname is require !'
      return message
    }
    if (values.amount < 1500) {
      message = 'Amount of loan must be equal 1500$ or higher !'
      return message
    }
    if (values.loanTerm < 12 || values.loanTerm > 36) {
      message = 'Loanterm must be more than 12 and lower than 36'
      return message
    }
  }
  const handleDismiss = () => setHandleAlert(false)
  const handleShow = async () => {
    setHandleAlert(true)
    await sleep(3000)
    handleDismiss()
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
          <br />
          <AlertComp
            show={handleAlert}
            onClose={handleDismiss}
            message={alert[0] ? alert[0].message : ''}
            variant={alert[0] ? alert[0].variant : ''}
          />
          <LoanForm onSubmit={(values: any) => _onSubmit(values)} />
        </div>
      </div>
    </>
  )
}

export default LoanPage
