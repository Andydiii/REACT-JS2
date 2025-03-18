
import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'
 
function App() {
  // we put todos info here in app as we will need to use props and this to communicate between components
  // e.g. we need pass todos as prop to header to display correct number of open tasks.



  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo!', complete: true }
  ]);

  const [selectedTab, setSelectedTab] = useState('Open');

  function handleAddTodo(newTodoInput) {
    // we cannot change on the old state "todos", but we can only assign it a new one, 
    // cerate a duplicate of original array with a new todo added. 
    const newTodoList = [...todos, { input: newTodoInput, complete: false}]; 
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleCompleteTodo(index) {
    let newTodoList = [...todos];
    newTodoList[index].complete = true;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((todo, todoIndex) => {
      // when return is true, keep it.
      return todoIndex != index;
    })
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }


  function handleSaveData(currTodos) {
    localStorage.setItem('todo-app', JSON.stringify( {todos: currTodos} ));
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) {return;}
    let db = JSON.parse(localStorage.getItem('todo-app'));
    setTodos(db.todos);
  }, [])

  return (
    <>
      <Header todos={todos} />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos} />
      <TodoList handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} selectedTab={selectedTab} todos={todos} />
      <TodoInput handleAddTodo={handleAddTodo}/>
    </>
  )
}

export default App
