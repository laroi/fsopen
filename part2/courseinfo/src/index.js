import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props)=> {
    return (
        <h1>{props.course}</h1>
    )
};

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}
const Content = (props) => {
      const content = props.parts.map(x=>(<Part part={x}/>)) 
      return content;
};
const Total = (props) => {
    return (
        <p>Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
    ) 
};
const Course = (props) => {
    return (
        <div>
          <Header course={props.course.name}/>
          <Content parts={props.course.parts} />
        {/*<Total parts={props.course.parts}/>*/}
        </div>

    )
}
const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      }


  return (
      <Course course={course}/>
      )
}

ReactDOM.render(<App />, document.getElementById('root'))
