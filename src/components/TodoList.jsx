import { TodoCard } from "./TodoCard";

export function TodoList({todos, handleCompleteTodo, selectedTab, handleDeleteTodo}) {
    // determine which list to use based on different tab? All list? / open list? / completed list
    const filterTodosList = selectedTab === 'All' ? todos : selectedTab === 'Completed' ? todos.filter((todo) => {return todo.complete}) : todos.filter((todo) => {return !todo.complete})

    // render the coressponding list of todos based 
    return (
        <>
            {filterTodosList.map((filteredTodo, todoIndex) => {
                return (
                    <TodoCard key = {todoIndex} todoIndex={todos.findIndex((todo) => {return (todo.input == filteredTodo.input);})} todo = {filteredTodo} handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo}/>
                )
            })}
        </>
    );
}

