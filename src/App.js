import React ,{useState} from 'react'
const Header=(props)=>{
 return(
  <h1>{props.course}</h1>
 ) 
}

const Total=(props)=>{
  return(
    <>
    <p>Total Number of exercises: {props.total}</p>
    </>
  )
}
const Content =(props)=>{
  return(
    <>
    <p>{props.name} {props.exercise}</p>
    </>
  )
}


function App(props) {
  const [counter, setCounter] = useState(0)
 
  let updateValue=() => {
  setCounter(counter +1)  
  };

  console.log('rendering...',counter)
  const course ={
    name: 'Half Stack application development',
  parts: [{
    name: 'Fundamentals of React',
    exercises :10
  },{
    name: 'Using props to pass data',
    exercises :7
  },{
    name: 'State of a component',
    exercises :14
  }]
  }


  
  return (
    <div>
      <button onClick={updateValue}>Plus</button>
      <button onClick={()=> setCounter(0)}>Reset</button>
      <div>{counter}</div>
    <Header course={course.name}/>
    <Content name={course.parts[0].name} exercise={course.parts[0].exercises}/>
    <Content name={course.parts[1].name} exercise={course.parts[1].exercises}/>
    <Content name={course.parts[2].name} exercise={course.parts[2].exercises}/>
 
    <Total total={course.parts[0].exercises +course.parts[1].exercises + course.parts[2].exercises}/>
    </div>
  );
}

export default App;
