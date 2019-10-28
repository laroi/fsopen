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


export default Course;
