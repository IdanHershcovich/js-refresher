import React, { useState } from 'react'


const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}


function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]


  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({})
  const [winner, setWinner] = useState()

  const anecdoteClick = (arr) => () => {
    const rand = getRandomInt(arr.length)
    setSelected(rand)
  }

  const voteClick = (quote_index) => {
    const copy = { ...votes }
    if (quote_index in copy) {
      copy[quote_index] += 1
    }
    else {
      copy[quote_index] = 1
    }
    setVotes(copy)
    mostVotes(copy)
  }

  const mostVotes = (obj) => () => {
    const v = Object.keys(obj).reduce(function(a, b){ return obj[a] > obj[b] ? a : b });
    setWinner(v)
  }
  return (
    
    <div>
      <div>
        <h2> Anecdote of the Day</h2>
        <div>
          {anecdotes[selected]}
          <br />
          {votes[selected] >= 1 && <p>has  {votes[selected]} votes </p>}
        </div>
        <div>
          <Button handleClick={() => voteClick(selected)} text="vote" />
          <Button handleClick={() => anecdoteClick(anecdotes)} text="next anecdote" />
        </div>
      </div>
      <div>
        <h2> Anecdote With Most Votes</h2>
        <div>
        {winner && <p>{anecdotes[winner]} has {votes[winner]} votes</p>}
        </div>
      </div>

    </div>
  )
}

export default App