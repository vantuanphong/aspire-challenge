import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const LoanForm: React.FC<{ onSubmit: any }> = ({ onSubmit }) => {
  const [state, setState] = useState({
    fullName: '',
    amount: '0',
    loanTerm: '12',
    paymentsPerWeek: '0',
    isApprove: false
  })

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Full name</Form.Label>
        <Form.Control
          value={state.fullName}
          type="text"
          onChange={(e: any) =>
            setState({ ...state, fullName: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Amount ($)</Form.Label>
        <Form.Control
          value={state.amount}
          type="number"
          onChange={(e: any) => {
            setState({ ...state, amount: e.target.value })
          }}
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Loan term (months)</Form.Label>
        <Form.Control
          value={state.loanTerm}
          min="12"
          max="36"
          type="number"
          onChange={(e: any) => {
            setState({ ...state, loanTerm: e.target.value })
          }}
        />
      </Form.Group>
      <label className="text-success" style={{ marginRight: 15 }}>
        Total payment:{' '}
        <span>
          {' '}
          {Number(state.amount) + (Number(state.amount) * 15) / 100} $
        </span>
      </label>
      <br />
      <label style={{ marginRight: 15 }}>
        Loan amount: {Number(state.amount)} $
      </label>
      <br />
      <label>
        Repay per week:{' '}
        {Math.round(
          ((Number(state.amount) * 15) / 100 + Number(state.amount)) /
            Number(state.loanTerm) /
            4
        )}{' '}
        $
      </label>
      <div className="text-center">
        <Button variant="success" onClick={() => onSubmit(state)}>
          Submit
        </Button>
      </div>
    </Form>
  )
}

export default LoanForm
