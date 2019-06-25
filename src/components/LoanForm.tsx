import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const LoanForm: React.FC<{ onSubmit: any }> = ({ onSubmit }) => {
  const [state, setState] = useState({
    fullName: '',
    amount: '0',
    loanTerm: '0'
  })

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Full name</Form.Label>
        <Form.Control
          value={state.fullName}
          type="text"
          placeholder="Enter email"
          onChange={(e: any) =>
            setState({ ...state, fullName: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Amount ($)</Form.Label>
        <Form.Control
          value={state.amount}
          type="text"
          placeholder="Enter email"
          onChange={(e: any) => setState({ ...state, amount: e.target.value })}
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Loan term (months)</Form.Label>
        <Form.Control
          value={state.loanTerm}
          type="text"
          placeholder="Enter email"
          onChange={(e: any) =>
            setState({ ...state, loanTerm: e.target.value })
          }
        />
      </Form.Group>

      <Button variant="primary" onClick={() => onSubmit(state)}>
        Submit
      </Button>
    </Form>
  )
}

export default LoanForm
