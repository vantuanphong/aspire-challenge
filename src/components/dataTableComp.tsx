import React, { useState } from 'react'
import { Table, Button, OverlayTrigger, Popover } from 'react-bootstrap'
const _headder = [
  'Fullname',
  'Amount',
  'Loan term',
  'Payment',
  'Approve',
  'Action'
]
const DataTableComp: React.FC<{
  data?: any
  onApprove?: any
  onCancelApprove?: any
  onPay?: any
  type?: string
}> = ({ data, onApprove, onCancelApprove, onPay, type }) => {
  const [rePayMoney, SetRePayMoney] = useState()
  const [headder] = useState(_headder)
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
            <td>{item.paymentsPerMonth}</td>
            <td>
              {!item.isApprove ? (
                <span className="text-danger">Not approve</span>
              ) : (
                <span className="text-success">Approve</span>
              )}
            </td>
            {type === 'approve' ? (
              <td>
                <Button
                  style={{ marginRight: 10 }}
                  onClick={() => onApprove(item)}
                  className="btn btn-sm btn-success"
                >
                  Approve
                </Button>
                <Button
                  onClick={() => onCancelApprove(item)}
                  className="btn btn-sm btn-danger"
                >
                  Cancel
                </Button>
              </td>
            ) : (
              <td className="text-center">
                <OverlayTrigger
                  trigger={['click']}
                  placement="right"
                  overlay={
                    <Popover
                      id={`popover-positioned-right`}
                      title={`It's time to repay !`}
                    >
                      <input
                        type="number"
                        className="form-control"
                        value={rePayMoney}
                        onChange={(e: any) => SetRePayMoney(e.target.value)}
                      />
                      <br />
                      <div className="text-right">
                        <Button
                          onClick={() => onPay(item)}
                          variant="outline-success"
                        >
                          Repay{' '}
                        </Button>
                      </div>
                    </Popover>
                  }
                >
                  <Button variant="secondary">Repay </Button>
                </OverlayTrigger>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default DataTableComp
