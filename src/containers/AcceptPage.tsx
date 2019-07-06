import React, { useState, useEffect } from 'react'
import ITable from '../interface/ITable'
import DataTableComp from '../components/dataTableComp'
import { fetchLoan, updateLoan, deleteLoan } from '../services/loan.services'
import AlertComp from '../components/alertComp'
import IAlert from '../interface/IAlert'
import { sleep } from '../services/util'

const ApprovedPage = () => {
  const [data, setData] = useState<Array<ITable>>([])
  const [check, setCheck] = useState(true)
  const [alert, setAlert] = useState<Array<IAlert>>([])
  const [handleAlert, setHandleAlert] = useState(false)
  const [showWarningMessage, setShowWarningMessage] = useState(false)
  useEffect(() => {
    const initData = async () => {
      if (check) {
        setCheck(false)
        const res = await fetchLoan()
        let _res: any = res
        setData(_res.data)
      }
    }
    initData()
  }, [check])

  const onToggleApprove = async (data: any, type: string) => {
    let _isApprove = true
    let _message = 'This loan have been approve'
    let _variant = 'success'
    if (type === 'Cancel') {
      _isApprove = false
      _message = 'This loan have been reject'
      _variant = 'danger'
    }
    const args: Array<ITable> = [
      {
        id: data.id,
        amount: data.amount,
        fullName: data.fullName,
        loanTerm: data.loanTerm,
        paymentsPerWeek: data.paymentsPerWeek,
        isApprove: _isApprove
      }
    ]
    const res: any = await updateLoan(args)
    if (res.status === 200) {
      setAlert([
        {
          message: _message,
          variant: _variant
        }
      ])
      handleShow()
      setCheck(true)
    }
    console.log(res)
  }

  const onDeleteLoan = async (data: any) => {
    const res: any = await deleteLoan(data.id)
    if (res.status === 200) {
      setAlert([
        {
          message: 'Delete loan successful !',
          variant: 'success'
        }
      ])
      handleShow()
      setShowWarningMessage(false)
      setCheck(true)
    }
  }

  const handleDismiss = () => setHandleAlert(false)
  const handleShow = async () => {
    setHandleAlert(true)
    await sleep(3000)
    handleDismiss()
  }
  return (
    <div className="row" style={{ marginTop: 20 }}>
      <div className="col-md-12">
        <AlertComp
          show={handleAlert}
          onClose={handleDismiss}
          message={alert[0] ? alert[0].message : ''}
          variant={alert[0] ? alert[0].variant : ''}
        />
        <DataTableComp
          data={[...data]}
          type="approve"
          showWarningMessage={showWarningMessage}
          setShowWarningMessage={setShowWarningMessage}
          onApprove={(data: any, type: string) =>
            onToggleApprove(data, 'Approve')
          }
          onCancelApprove={(data: any, type: string) =>
            onToggleApprove(data, 'Cancel')
          }
          onDeleteLoan={(data: any) => onDeleteLoan(data)}
        />
      </div>
    </div>
  )
}

export default ApprovedPage
