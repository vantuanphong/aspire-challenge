import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { fetchLoan } from '../services/loan.services'

const _headder = ['Fullname', 'Amount', 'Loan term']
const RepayPage: React.FC = () => {
  const [headder] = useState(_headder)
  const [data, setData] = useState<Array<any>>([])
  useEffect(() => {
    const initData = async () => {
      const res = await fetchLoan()
      setData(res ? res.data : [])
    }

    initData()
  }, [])
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {headder.map((item: string, index: number) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr>
            <td>{item.fullName}</td>
            <td>{item.amount}</td>
            <td>{item.loanTerm}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default RepayPage
