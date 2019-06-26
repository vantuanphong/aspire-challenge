import React, { useState, useEffect } from 'react'
import { fetchLoan, updateLoan } from '../services/loan.services'
import ITable from '../interface/ITable'
import DataTableComp from '../components/dataTableComp'
import AlertComp from '../components/alertComp'
import IAlert from '../interface/IAlert'

const RepayPage: React.FC = () => {
  const [data, setData] = useState<Array<ITable>>([])
  const [check, setCheck] = useState(true)
  const [alert, setAlert] = useState<Array<IAlert>>([])
  const [handleAlert, setHandleAlert] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)
  useEffect(() => {
    const initData = async () => {
      if (check) {
        setCheck(false)
        const res = await fetchLoan()
        let _res: any = res
        let filterData = _res.data.filter((f: any) => f.isApprove === true)
        setData(filterData)
      }
    }
    initData()
  }, [check])

  const onPay = async (data: any, rePayMoney: number) => {
    if (rePayMoney < Number(data.paymentsPerWeek)) {
      setAlert([
        {
          message: 'You not paying enough must equal or higher',
          variant: 'danger'
        }
      ])
      handleShow()
    } else if (rePayMoney > data.amount) {
      setAlert([
        {
          message: 'You paying too much, take your money back',
          variant: 'danger'
        }
      ])
      handleShow()
    } else {
      const _outstandingDebt = data.amount - rePayMoney
      const _ITable: Array<ITable> = [
        {
          id: data.id,
          amount: _outstandingDebt,
          fullName: data.fullName,
          loanTerm: data.loanTerm,
          paymentsPerWeek: data.paymentsPerWeek,
          isApprove: data.isApprove
        }
      ]
      const res = await updateLoan(_ITable)
      if (res) {
        setAlert([
          {
            message: 'You have paind for this week. Thanks!',
            variant: 'success'
          }
        ])
        handleShow()
        setCheck(true)
        setShowOverlay(false)
      }
      console.log(res)
    }
  }

  const handleDismiss = () => setHandleAlert(false)
  const handleShow = () => setHandleAlert(true)
  return (
    <div className="row" style={{ marginTop: 20 }}>
      <div className="col-md-12">
        <AlertComp
          onClose={handleDismiss}
          message={alert[0] ? alert[0].message : ''}
          variant={alert[0] ? alert[0].variant : ''}
        />
        <DataTableComp
          onPay={(item: any, rePayMoney: string) =>
            onPay(item, Number(rePayMoney))
          }
          data={data}
          showOverlay={showOverlay}
          setShowOverlay={setShowOverlay}
        />
      </div>
    </div>
  )
}

export default RepayPage
