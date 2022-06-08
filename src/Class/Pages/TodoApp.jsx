import React,{useRef} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addTodo,deleteTodo,completeTodo} from '../TodoApp/TodoAction';


const TodoApp = () => {
    const dispatch = useDispatch ();
    const todos = useSelector ((state)=>state.todo.todos)
    const ref = useRef();
    console.log(todos)

    const addNew =()=>{
        let value =ref.current.value;
        dispatch(
            addTodo({
            value:value,
            isCompleted : false

        })
        );
        ref.current.value=null;
    }

    const OnDelete=(e)=>{
       console.log(e)
        dispatch(
            deleteTodo(e)
        )

    }

    const OnComplete=(e)=>{
        dispatch(
            completeTodo(e)
        )

    }
  return (
 <>
        <div>
        <input
        ref={ref}
        type="text"
        placeholder='Enter Task'
        />
        <button onClick={addNew}>Add</button>
    </div>
   
    <br></br>
    {console.log(todos)}
    {todos.map((todo)=> {
         return (
            <div style={{display:"flex" , 
            border:"1px solid black",
            maxWidth:"200px",
            margin:"auto"
            }}>
                <input type="checkbox" style={{marginTop:"22px"}} onClick={()=>OnComplete(todo.id)} />
            
                <p>{todo.value}</p>
                
            <button style={{height:"20px",marginTop:"20px"}} onClick={()=>OnDelete(todo.id)}>Delete</button>
            
            </div>
         )
    })}
 </>
  )
}

export default TodoApp;