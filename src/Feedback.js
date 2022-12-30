import React,{useState} from 'react'

const Statistics = (props)=>{
    let g=props.good;
    let n=props.neutral;
    let b=props.bad;
    if(g===0 && n===0 && b===0){
    
    return(
        <p>No feedback given</p>
    )
}
return(
    <>
    <table>
        <tbody>
        <tr>
            <th>Good</th>
            <th>{g}</th>
        </tr>
        <tr>
            <th>Neutral</th>
            <th>{n}</th>
        </tr>
        <tr>
            <th>Bad</th>
            <th>{b}</th>
        </tr>
        <tr>
            <th>All</th>
            <th>{g+n+b}</th>
        </tr>
        <tr>
            <th>Average</th>
            <th>{(1*g + 0*n + -1*b)/(g+n+b)}</th>
        </tr>
        <tr>
            <th>Positive</th>
            <th>{(g/(g+n+b))*100} %</th>
        </tr>
        </tbody>
    </table>
    
    
    </> 
    )
}

export default function Feedback() {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
      ]
    const [quotes, setQuotes] = useState(anecdotes[0])
   
    const quote =()=>{
        const randomNumber=(Math.floor(Math.random()*6));
        return(
           setQuotes(anecdotes[randomNumber])
        )
    }
   
    return (
    <>
    <q>{quotes}</q>
    <br />
    <button>vote</button>
    <button onClick={quote}>Next quote</button>
    <h1>Give Feedback</h1>
    <button onClick={()=>{setGood(good+1)}}>Good</button>
    <button onClick={()=>{setNeutral(neutral+1)}}>Neutral</button>
    <button onClick={()=>{setBad(bad+1)}}>Bad</button>
    <h1>Statistics</h1>
    <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}
