import React from 'react'

const List = (props) => {
    const { brand, info } = props
  return (
    <div>
      
      {/* <li>I am a { brand }</li>; */}
      <li>I am a { info.brand}</li>;
    </div>
  )
}

export default List
