import React from 'react'
import { Alert } from 'react-bootstrap'

const ArlertComp: React.FC<{
  variant?: any
  message?: string
  dismissible?: boolean
  onClose?: any
}> = ({ variant, message, dismissible, onClose }) => {
  return (
    <Alert
      onClose={onClose}
      dismissible={dismissible}
      variant={!variant ? undefined : variant}
    >
      {message}
    </Alert>
  )
}

export default ArlertComp
