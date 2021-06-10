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
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(
      (task) => task.id !== id
    ))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { 
      ...task,
      reminder: !task.reminder,
     } : task))
  }

  return (
    <div className="container">
      <Header title='Hello' />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask}
        onToggle={toggleReminder}/>
      ) : (
        'No Tasks'
      )}
    </div>
  );
}

export default App;
