import React, { ReactNode } from 'react'

import { Type } from 'theme/base'

const ToastBody = ({ title, message }: { title: string; message: ReactNode }) => {
  return (
    <div>
      <Type.H5 color="white">{title}</Type.H5>
      <Type.Body2 color="gray3">{message}</Type.Body2>
    </div>
  )
}

export default ToastBody
