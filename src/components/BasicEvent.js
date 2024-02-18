import React from 'react'

const BasicEvent = () => {
    const handleClick = (a,b) => {
        alert(b.type)
    }
  return (
    <div>
      <button onClick={(event) =>handleClick("Goal",event)}>Shoot</button>
    </div>
  )
}

export default BasicEvent
