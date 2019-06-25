import React, { useState, useEffect } from 'react'
import { fetchLoan } from '../services/loan.services'
import Itable from '../interface/Itable'
import DataTableComp from '../components/dataTableComp'

const RepayPage: React.FC = () => {
  const [data, setData] = useState<Array<Itable>>([])
  useEffect(() => {
    const initData = async () => {
      const res = await fetchLoan()
      setData(res ? res.data : [])
    }
    initData()
  }, [data])
  return (
    <div className="row" style={{ marginTop: 20 }}>
      <div className="col-md-12">
        <DataTableComp data={data} />
      </div>
    </div>
  )
}

export default RepayPage
