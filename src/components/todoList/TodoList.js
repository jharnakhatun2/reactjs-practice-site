import React, { useEffect, useState } from 'react';
import './TodoList.css';

const TodoList = () => {
const [todoList, setTodoList] = useState([]);
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setTodoList(data));
},[]);
    return (
        <div style={{backgroundColor:'#7ed9af',marginTop:'5rem'}}>
            <h2 style={{padding: '3rem 0',fontFamily:'poppins',fontWeight:'bold'}}>TodoList Collecton's : {todoList.length} </h2>
        <div style={{margin: '0 2rem'}}>
        <div  className='todoListContainer'>
            {
                todoList.map(todoListEach => <DisplayTodoList 
                                                todoListEach={todoListEach} 
                                                key={todoListEach.id} >
                                                </DisplayTodoList>)
            }
            </div>
        </div>
        </div>
    );
};

function DisplayTodoList(props){
    return(
        <div className='singleTodoList'>
            <p><strong>ID :</strong> {props.todoListEach.id}</p>
            <p><strong>Title :</strong> {props.todoListEach.title}</p>
            <p><strong>User-ID :</strong> {props.todoListEach.userId}</p>
            <p><strong>Completed :</strong> {props.todoListEach.completed ? ' Completed' :  ' Not Completed'}</p>   
        </div>
    )
}

export default TodoList;