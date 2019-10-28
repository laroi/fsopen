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
        <p><b>Number of exercises {props.parts.reduce((sum, x) => sum+x.exercises, 0)}</b></p>
    ) 
};
const Course = (props) => {
    return (
        <div>
          <Header course={props.course.name}/>
          <Content parts={props.course.parts} />
          <Total parts={props.course.parts}/>
        </div>

    )
}
const App = () => {
 const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
      <div>
      {courses.map((x)=>{return (<Course course={x}/>)})}
    </div>
      )
}

ReactDOM.render(<App />, document.getElementById('root'))
