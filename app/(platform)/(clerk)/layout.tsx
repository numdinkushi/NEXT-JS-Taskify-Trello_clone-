import React from 'react'

const ClerkLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className=' items-center justify-center h-full' >{children}</div>
  )
}

export default ClerkLayout