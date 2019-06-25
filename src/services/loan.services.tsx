import Api from '../configs/api'

const url = 'loan'

export const createLoan = async (args: any) => {
  try {
    const res = await Api.post(url, args)
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

export const updateLoan = async (args: any) => {
  try {
    const res = await Api.put(`${url}/${args.id}`, args)
    return res
  } catch (err) {
    console.log(err)
  }
}

export const deleteLoan = async (id?: number) => {
  try {
    const res = await Api.delete(`${url}/${id}`)
    return res
  } catch (err) {
    console.log(err)
  }
}
