import React from 'react'

const LoanPage:React.FC<{props?:any}> = props =>{
    let prop:any = props
    let tittle = prop.match.params.tittle
    
    
    return <div>{tittle}</div>
}

export default LoanPage