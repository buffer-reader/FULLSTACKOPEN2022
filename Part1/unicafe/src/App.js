import { useState } from "react";

const StatisticLine=(props)=>{
  return(

      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
  )
}



const Statistics =(props)=>{
  const aver=()=>{
    return props.average/props.all
  }
  

  const pert=()=>{
    return (props.good/props.all)*100
  }
  if(props.all==0)
  {
    return(
      <div>
        No feedback given
      </div>
    )
  }

  return(
    <table>
      <tbody>
      <StatisticLine text='good' value={props.good} />
      <StatisticLine text='neutral' value={props.neutral} />
      <StatisticLine text='bad' value={props.bad} />
      <StatisticLine text='average' value={aver()} />
      <StatisticLine text='percentage' value={pert()+' %'} />
      </tbody>
    </table>

  )
}


const App = () => {
  const [ clicks, setclicks ] =useState({
    good:0,
    neutral:0,
    bad:0
  })
  const [ all, setAll] = useState(0)
  const [ average, setAvg ] =useState(0)
  const goodCLick = () => {
    const newClicks ={
      ...clicks,
      good: clicks.good+1
    }
    setclicks(newClicks)
    setAll(all+1)
    setAvg(average+1)
  }
  const neutralCLick = () => {
    const newClicks ={
      ...clicks,
      neutral: clicks.neutral+1
    }
    setclicks(newClicks)
    setAll(all+1)
    setAvg(average)
  }
  const badCLick = () => {
    const newClicks ={
      ...clicks,
      bad: clicks.bad+1
    }
    setclicks(newClicks)
    setAll(all+1)
    setAvg(average-1)
  }
  const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
  
  
  
  return (
    <div>
      <h1>give feedback</h1>
      <div>
      <Button onClick={goodCLick} text='good' />
      <Button onClick={neutralCLick} text='neutral' />
      <Button onClick={badCLick} text='bad' />
      </div>
      <h1>
        statistics
      </h1>
      
      <Statistics good={clicks.good} neutral={clicks.neutral} bad={clicks.bad} all={all} average={average} />
      

      
    </div>
  );
};
export default App;
