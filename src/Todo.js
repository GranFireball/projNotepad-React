import { useReducer, useRef} from 'react';
import {GrAdd} from 'react-icons/gr';
import {MdDeleteForever} from 'react-icons/md';
import {TodoReducer} from './TodoReducer';

export default function Todo(){
    const TodoData = [];
    const [todos, dispatch] = useReducer(TodoReducer, TodoData);
    const textTodo = useRef(null);
    
    function Adicionar(){
        if(textTodo.current.value !== ''){
            dispatch({type: "ADD_TODO", payload: {text: textTodo.current.value}});
        }
        
    }

    function Deletar(textDel){
        dispatch({type: "DELETE_TODO", payload: textDel});
    }
    
    return(
        <>
        <div className="addTodo">
            <input className="inputAdd" ref={textTodo} placeholder="Adicionar Tarefa"/>
            <GrAdd size={24} className='addIcon' onClick={Adicionar}/>
        </div>
        <div className="listTodo">
            {todos.map((todo) => {
                return(
                    <div className='todo' key={todo.text}>
                        <span className='textTodo'>{todo.text}</span>
                        <MdDeleteForever size={28} color='red' className='delIcon' onClick={() => Deletar(todo.text)}/>
                    </div>
                )
            })}
        </div>
        </>
    );
}