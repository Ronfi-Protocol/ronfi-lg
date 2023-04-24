import React, { ReactNode } from 'react'

import { Type } from 'theme/base'

const ToastBody = ({ title, message }: { title: string; message: ReactNode }) => {
  return (
    <div>
      <Type.H5 color="white">{title}</Type.H5>
      <Type.Normal color="gray3">{message}</Type.Normal>
    </div>
  )
}

export default ToastBody
