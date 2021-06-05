//import logo from './logo.svg';
import './App.css';

import Header from "./MyComponents/Header";
import {Todos_List} from "./MyComponents/Todos_List";
import {AddTodo} from "./MyComponents/AddTodo";
import {Footer} from "./MyComponents/Footer";
import React, { useState,useEffect } from 'react';
import {About} from "./MyComponents/About";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() { 
  let initTodo;
  if(localStorage.getItem('todos') === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }
  const onDelete = (todo) =>{
    console.log("Deleting todo",todo);

    // Deleting this way is not work in REact
    //let index =  todos.indexOf(todo);
    // todos.splice(index,1);

    settodos(todos.filter((e)=>{
      return e !== todo;
    }))

    localStorage.setItem('todos',JSON.stringify(todos));  
  }


  const addTodo = (title,desc) =>{
    console.log("adding this task",title,desc);
    let sno;
    if(todos.length === 0){
       sno = 0;
    }
    else{
       sno = todos[todos.length-1].sno+1;
    }
    
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,      
    }
    settodos([...todos,myTodo])
    console.log(myTodo);
    
  }

  const [todos, settodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos)); 
    
  }, [todos]) 
  return (
    <>
      <Router>
          <Header title = "Todo_Lists" searchBar={false}/>
          <Switch>
            
        <Route exact path="/" render= {()=>{
          return (
          <>
          <AddTodo addTodo={addTodo}/>
          <Todos_List todos = {todos} onDelete={onDelete }/>
          </>)
        }}>
         

        </Route>
           <Route exact path="/about">
            <About />
          </Route>
        
        </Switch>
          

          <Footer/>
      </Router>
    </>
  );
}

export default App;
