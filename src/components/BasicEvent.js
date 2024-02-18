import React from 'react'

const BasicEvent = ({isGoal,car,engine}) => {
    const handleClick = (a,b) => {
        alert(b.type)
    }
    // function MissedGoal(){
    //     return <h1>Missed</h1>
    // }
    // function MadeGoal() {
    //     return <h1>GOAL!</h1>;
    //   }
  return (
    <div>
      <button onClick={(event) =>handleClick("Goal",event)}>Shoot</button>
{/* {isGoal? <MadeGoal /> : <MissedGoal />} */}
{isGoal? <p>Its a Goal</p>: <p>Not a Goal</p>}
{car && car.length >0 && car.map((item,index) => <p key={index}>{item}</p>)}
{engine.length > 0 && <div>{engine.map((item,index) =><p key={index}>{item}</p>)}</div>}
    </div>
  )
}

export default BasicEvent
