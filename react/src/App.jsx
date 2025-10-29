import { useState } from 'react'
import { Task } from './components/task'

function App() {
    let [taskcontaniner , settaskcontainer] = useState([]);

    function addtask(){
        settaskcontainer([...taskcontaniner , {title : "new task"}])
    }


    return (
      <div style={{textAlign: 'center',fontFamily: 'sans-serif'}}>
        <h1>Tasks</h1>
        <div >
        {taskcontaniner.map((taskitem) => (<Task  title={taskitem.title}/>

        ))
        }</div>
        <button onClick={addtask}>add</button>
      </div>
    
  )
}



export default App
