import React, { useState } from 'react'
import { Table, Button, Form, Modal } from 'react-bootstrap'

const _headder = [
  'Fullname',
  'Amount',
  'Loan term',
  'Payment Per Week',
  'Approve',
  'Action'
]
const DataTableComp: React.FC<{
  data?: any
  onApprove?: any
  onCancelApprove?: any
  onDeleteLoan?: any
  onPay?: any
  type?: string
  setShowOverlay?: any
  showOverlay?: any
  setShowWarningMessage?: any
  showWarningMessage?: any
}> = ({
  data,
  onApprove,
  onCancelApprove,
  onPay,
  type,
  setShowOverlay,
  showOverlay,
  setShowWarningMessage,
  showWarningMessage,
  onDeleteLoan
}) => {
  const [rePayMoney, setRePayMoney] = useState('0')
  const [headder] = useState(_headder)

  const smClose = () => {
    setShowOverlay(false)
  }
  const closeWarningMessage = () => {
    setShowWarningMessage(false)
  }
  return (
    <Table className="text-center" striped bordered hover>
      <thead>
        <tr>
          {headder.map((item: string, index: number) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item: any, idex: number) => (
          <tr key={idex}>
            <td>{item.fullName}</td>
            <td>{item.amount}</td>
            <td>{item.loanTerm}</td>
            <td>{item.paymentsPerWeek}</td>
            <td>
              {!item.isApprove ? (
                <span className="text-danger">Not approve</span>
              ) : (
                <span className="text-success">Approve</span>
              )}
            </td>
            {type === 'approve' ? (
              <td>
                {Number(item.amount) === 0 ? (
                  <>
                    <Button
                      disabled
                      style={{ marginRight: 10 }}
                      className="btn btn-sm btn-success"
                    >
                      Approve
                    </Button>
                    <Button
                      style={{ marginRight: 10 }}
                      disabled
                      className="btn btn-sm btn-warning"
                    >
                      Cancel
                    </Button>
                    <Button disabled className="btn btn-sm btn-danger">
                      Delete
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      style={{ marginRight: 10 }}
                      onClick={() => onApprove(item)}
                      className="btn btn-sm btn-success"
                    >
                      Approve
                    </Button>
                    <Button
                      style={{ marginRight: 10 }}
                      onClick={() => onCancelApprove(item)}
                      className="btn btn-sm btn-warning"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={() => setShowWarningMessage(true)}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </Button>
                  </>
                )}
                <Modal
                  size="sm"
                  show={showWarningMessage}
                  onHide={closeWarningMessage}
                  style={{ top: '25%' }}
                  aria-labelledby="example-modal-sizes-title-sm"
                >
                  <div className="row" style={{ padding: '15px' }}>
                    <div className="col-md-12">
                      <h6>Are you sure to delete this loan ?</h6>
                      <div className="text-center">
                        <Button
                          style={{ marginRight: 15 }}
                          onClick={() => onDeleteLoan(item)}
                          variant="outline-danger"
                        >
                          Yes
                        </Button>
                        <Button
                          onClick={() => setShowWarningMessage(false)}
                          variant="outline-dark"
                        >
                          No
                        </Button>
                      </div>
                    </div>
                  </div>
                </Modal>
              </td>
            ) : (
              <td className="text-center">
                {Number(item.amount) === 0 ? (
                  <Button variant="secondary" disabled className="btn-sm">
                    Repay
                  </Button>
                ) : (
                  <Button
                    className="btn-sm"
                    variant="success"
                    onClick={() => setShowOverlay(true)}
                  >
                    Repay
                  </Button>
                )}
                <Modal
                  size="sm"
                  show={showOverlay}
                  onHide={smClose}
                  style={{ top: '25%' }}
                  aria-labelledby="example-modal-sizes-title-sm"
                >
                  <div className="row" style={{ padding: '15px' }}>
                    <div className="col-md-12">
                      <h6>It's time to repay !</h6>
                      <Form.Control
                        type="number"
                        value={rePayMoney}
                        onChange={(e: any) => setRePayMoney(e.target.value)}
                      />
                      <br />
                      <div className="text-right">
                        <Button
                          onClick={() => onPay(item, rePayMoney)}
                          variant="outline-success"
                        >
                          Repay{' '}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Modal>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default DataTableComp
