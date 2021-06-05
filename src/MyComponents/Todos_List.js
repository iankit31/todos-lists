import React from 'react'
import {Todo_items} from "../MyComponents/Todo_items";
export const Todos_List = (props) => {
    let mystyle = {
        minHeight: "60vh",
        margin: "10px auto"
    }
    return (
        <div className="container my-3" style={mystyle}>
            <h3 className = " my-3" > Todos List </h3>
            {props.todos.length===0? "No Todos to Display ":
                props.todos.map((todo)=>{
                    return (
                        <Todo_items todo = {todo} key={todo.sno} onDelete={props.onDelete}/>
                    )
                })
            }
            
            
        </div>
    )
}
