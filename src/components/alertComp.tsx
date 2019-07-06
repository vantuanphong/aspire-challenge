import React from 'react'
import { Alert } from 'react-bootstrap'
import IAlert from '../interface/IAlert'

const AlertComp: React.FC<IAlert> = props => {
  return (
    <Alert
      onClose={props.onClose}
      dismissible={props.dismissible}
      show={props.show}
      variant={!props.variant ? undefined : props.variant}
    >
      {props.message}
    </Alert>
  )
}

export default AlertComp
