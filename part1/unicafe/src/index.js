import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const Display = props => <div><h1>{props.value}</h1></div>
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const Stats = (props) =>{ 
    const all = props.good+props.bad+props.neutral
    if (all <= 0) {
        return (<div> <h1>Statistics</h1><p>No feedback given</p></div>)
    }
    return (
    <div>
        <h1>Statistics</h1>
        <p>good : {props.good}</p>
        <p>neutral : {props.neutral}</p>
        <p>bad : {props.bad}</p>
        <p>all : {all} </p>
        <p>average : {((props.good+(props.bad*-1))/(props.good+props.bad) || 0)}</p>
        <p>positive: {`${((props.good/all) * 100) || 0} %` }</p>
    </div>
)
}
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Display value={"give feedback"}/>
      <Button text={"good"} handleClick={()=>{setGood(good+1)}}/>
      <Button text={"neutral"} handleClick={()=>{setNeutral(neutral+1)}}/>
      <Button text={"bad"} handleClick={()=>{setBad(bad+1)}}/>

      <Stats good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
