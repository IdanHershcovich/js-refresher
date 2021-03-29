import './App.css';


const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1> {props.course.name} </h1>
    </div>
  )
}

const Part = (props) => {
  const parts = props.parts
  return (
    <div>
      <p> {parts.name} {parts.exercises} </p>
    </div>
  )
}

const Content = (props) => {
  const part = p => p.parts.parts.map(data => {
    return (
      <div>
        <Part parts={data} />
      </div>
    )
  })
  return (
    part(props)
  )
}


const Total = (props) => {
  const parts = props.parts.parts
  let exercises = parts.map(e => e.exercises)

  const sum = exercises.reduce((accumulator, currentVal) => {
    return accumulator+currentVal
  },0)

  return (
    <div>
      <p>Number of exercises {sum} </p>
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
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} />
    </div>
  )
}

export default App
