import React from 'react'

const Child = () => {
    console.log("i am child")
  return (
    <div>Child</div>
  )
}

export default React.memo(Child)