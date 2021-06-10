import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
        id : 1,
        text : 'Doctors appointment',
        day : 'Feb 5th at 2:30 pm',
        reminder : true,
    },
    {
        id : 2,
        text : 'PTM',
        day : 'Feb 6th at 1:30 pm',
        reminder : true,
    },
    {
        id : 3,
        text : 'Shopping',
        day : 'Feb 7th at 2:30 am',
        reminder : false,
    },
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter(
      (task) => task.id !== id
    ))
  }

  return (
    <div className="container">
      <Header title='Hello' />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
