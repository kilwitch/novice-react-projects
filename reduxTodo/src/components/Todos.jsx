import React,{useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos=useSelector(state=> state.todos)
    const dispatch= useDispatch()

    const [editId, setEditId]= useState(null)
    const [editedText, setEditedText] = useState("")

    const handleEdit=(todo)=>{
        setEditId(todo.id)
        setEditedText(todo.text)
    }

    const handleSave=(id)=>{
        dispatch(updateTodo({id, text:editedText}))
        setEditId(null)
    }
    return (
    <>
     <div>Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >

           {editId === todo.id ? (
              <input
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                className="px-2 py-1 rounded border"
              />
            ) : (
              <div className="text-white">{todo.text}</div>
            )}

            <div className='flex items-center gap-3'>
                {editId === todo.id ? (
                <button
                onClick={()=> handleSave(todo.id)}
                className='text-white bg-green-500 border-0 py-1 px-4 hover:bg-green-600 rounded'
                >Save</button>
                ):(
            <button
                  onClick={() => handleEdit(todo)}
                  className="text-white bg-yellow-500 border-0 py-1 px-4 hover:bg-yellow-600 rounded"
                >
                  Edit
                </button>
                )}
            <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 hover:bg-red-600 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos