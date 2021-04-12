// import React, { useState } from 'react'


// const Display = ({counter}) => <div>{counter}</div>



// const Button = (props) => (
//   <button onClick={props.handleClick}>
//     {props.text}
//   </button>
// )


// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const App = () => {
//   const [value, setValue] = useState(10)

//   const setToValue = (newValue) => () => {
//     setValue(newValue)
//   }

//   return (
//     <div>
//       {value}
//       <button onClick={setToValue(1000)}>thousand</button>
//       <button onClick={setToValue(0)}>reset</button>
//       <button onClick={setToValue(value + 1)}>increment</button>
//     </div>
//   )
// }



// export default App


import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

// const Display = ({ text, count }) => (
//   <p> {text} {count}</p>
// )

// const Statistics = ({ data }) => {
//   const [good, neutral, bad] = [data[0], data[1], data[2]]
//   const total = (good + neutral + bad)
//   const average = (good - bad) / total
//   const positive = (good / total) * 100
//   return (
//     total === 0 ? <p> No feedback given</p> :
//       <div>
//         <Display text="good" count={good} />
//         <Display text="neutral" count={neutral} />
//         <Display text="bad" count={bad} />
//         <p>all {total}</p>
//         <p>average {average} </p>
//         <p>positive {positive}%</p>
//       </div>
//   )
// }

const Statistic = (props) => {
  return (
    <tr>
      <td> {props.text}</td>
      <td> {props.value}</td>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = (good + neutral + bad)
  const positive = (good / total) * 100

  const handleClick = (feedback) => () => {
    switch (feedback) {
      case "good":
        setGood(good + 1)
        break;
      case "neutral":
        setNeutral(neutral + 1)
        break;
      case "bad":
        setBad(bad + 1)
        break;
      default:
        console.log(feedback)
    }
  }

  const averageCalc = (good, neutral, bad) => {
    const total = good + neutral + bad;
    return ((good - bad) / total)
  }
  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
      </div>
      <div>
        <Button handleClick={handleClick("good")} text="good" />
        <Button handleClick={handleClick("neutral")} text="neutral" />
        <Button handleClick={handleClick("bad")} text="bad" />
      </div>
      {total === 0 ? <p> No feedback given</p> :
        <div>
          <h1> Statistics</h1>
          <table>
            <tbody>
              <Statistic text="good" value={good} />
              <Statistic text="neutral" value={neutral} />
              <Statistic text="bad" value={bad} />
              <Statistic text="all" value={total} />
              <Statistic text="average" value={averageCalc(good, neutral, bad)} />
              <Statistic text="positive" value={positive} />
            </tbody>
          </table>
        </div>
      }
    </div>
  )
}

export default App
