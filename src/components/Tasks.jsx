
import NewTask from './NewTask'
const Tasks = ({tasks,onAdd,onDelete}) => {
    
  return (
    <section>
        <h2 className='text-2xl font-bold text-stone-700 mb-4'>Task</h2>
        <NewTask onAddNewTask={onAdd}/>
        {tasks && tasks.length === 0 && (<p className='text-stone-800 mb-4 my-4'>This project does not have any tasks yet.</p>)}
        {tasks && tasks.length > 0 && (<ul className='p-4 mt-8 rounded-md bg-stone-100'>
            {
                tasks.map(task=>(
                    <li key={task.id} className='flex items-center justify-between my-4'>
                        <span>{task.task}</span>
                        <button className='text-stone-700 hover:text-red-500' onClick={()=> onDelete(task.id)}>Delete</button>
                    </li>
                ))
            }
        </ul>)}
        
    </section>
  )
}

export default Tasks