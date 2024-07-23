import React from 'react'

const Centered = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="absolute top-[50%] right-[50%]  translate-x-[50%] translate-y-[-50%]">{children}</div>
  )
}

export default Centered