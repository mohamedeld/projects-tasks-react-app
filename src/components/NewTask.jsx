import {  useState } from "react"


const NewTask = ({onAddNewTask}) => {
    const [enteredTask,setEnteredTask] = useState('');
    const handleSubmit = ()=>{
        
        if(enteredTask.trim() === ""){
            return;
        }
        onAddNewTask(enteredTask);
        setEnteredTask('')
    }
    console.log(enteredTask.current.value)
  return (
    <div className='flex items-center gap-4' >
        <input type="text" className='w-64 px-2 py-1 rounded-sm bg-stone-200' value={enteredTask} onChange={(e)=> setEnteredTask(e.target.value)}/>
        <button onClick={handleSubmit} className='text-stone-700 hover:text-stone-950'>Add Task</button>
    </div>
  )
}

export default NewTask