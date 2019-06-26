import Api from '../configs/api'
import ITable from '../interface/ITable'

const url = 'loan'

export const createLoan = async (args: any) => {
  try {
    const res = await Api.post(url, ...args)
    return res
  } catch (err) {
    console.log(err)
  }
}

export const fetchLoan = async () => {
  try {
    const res = await Api.get(url)
    return res
  } catch (err) {
    console.log(err)
  }
}

export const updateLoan = async (args: Array<ITable>) => {
  try {
    const res = await Api.put(`${url}/${args[0].id}`, ...args)
    return res
  } catch (err) {
    console.log(err)
  }
}
