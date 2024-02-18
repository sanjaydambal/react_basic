import React from 'react'


const BasicEvent = ({isGoal,car,engine}) => {
    const handleClick = (a,b) => {
        alert(b.type)
    }

  return (
    <div>
      <button onClick={(event) =>handleClick("Goal",event)}>Shoot</button>
{/* {isGoal? <MadeGoal /> : <MissedGoal />} */}
{isGoal? <p>Its a Goal</p>: <p>Not a Goal</p>}
{car && car.length >0 && car.map((item,index) => <p key={index}>{item}</p>)}
{engine.length > 0 && <ul>{engine.map((item,index) =><li key={index}>I am {item}</li>)}</ul>}

    </div>
  )
}

export default BasicEvent
