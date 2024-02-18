import React from 'react'

const BasicEvent = ({isGoal}) => {
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
    </div>
  )
}

export default BasicEvent
