import React, { useState, useEffect } from 'react'
import Itable from '../interface/Itable'
import DataTableComp from '../components/dataTableComp'
import { fetchLoan, updateLoan } from '../services/loan.services'

const ApprovedPage = () => {
  const [data, setData] = useState<Array<Itable>>([])
  useEffect(() => {
    const initData = async () => {
      const res = await fetchLoan()
      setData(res ? res.data : [])
    }
    initData()
  }, [data])
  const onToggleApprove = async (data: any, type: string) => {
    let _isApprove = true
    if (type === 'Cancel') {
      _isApprove = false
    }
    const args: Array<Itable> = [
      {
        id: data.id,
        amount: data.amount,
        fullName: data.fullName,
        loanTerm: data.loanTerm,
        paymentsPerMonth: data.paymentsPerMonth,
        isApprove: _isApprove
      }
    ]
    const res = await updateLoan(args)
  }

  return (
    <div className="row" style={{ marginTop: 20 }}>
      <div className="col-md-12">
        <DataTableComp
          data={data}
          type="approve"
          onApprove={(data: any, type: string) =>
            onToggleApprove(data, 'Approve')
          }
          onCancelApprove={(data: any, type: string) =>
            onToggleApprove(data, 'Cancel')
          }
        />
      </div>
    </div>
  )
}

export default ApprovedPage
