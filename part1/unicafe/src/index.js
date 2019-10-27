import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const Display = props => <div><h1>{props.value}</h1></div>
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const Statistic = (props) => {
    return (
    <p>{props.label} : {props.value}</p>
    )
}
const Stats = (props) =>{ 
    const all = props.good+props.bad+props.neutral
    if (all <= 0) {
        return (<div> <h1>Statistics</h1><p>No feedback given</p></div>)
    }
    return (
    <div>
        <h1>Statistics</h1>
        <Statistic label={"good"} value={props.good}/>
        <Statistic label={"neutral"} value={props.neutral}/>
        <Statistic label={"bad"} value={props.bad}/>
        <Statistic label={"all"} value={all}/>
        <Statistic label={"average"} value={((props.good+(props.bad*-1))/(props.good+props.bad) || 0)}/>
        <Statistic label={"positive"} value={`${((props.good/all) * 100) || 0} %`}/>
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
