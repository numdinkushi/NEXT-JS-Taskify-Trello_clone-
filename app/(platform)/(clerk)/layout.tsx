import React from 'react'

const ClerkLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='h-full flex items-center justify-center my-[30vh]' >{children}</div>
  )
}

export default ClerkLayout