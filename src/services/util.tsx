export const sleep = (milliseconds: any) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
