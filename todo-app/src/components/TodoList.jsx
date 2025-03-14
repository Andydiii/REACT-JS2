import { TodoCard } from "./TodoCard";

export function TodoList({todos}) {
    // determine which list to use based on different tab? All list? / open list? / completed list
    const tab = 'Completed';
    const filterTodosList = tab === 'All' ? todos : tab === 'Completed' ? todos.filter((todo) => {return todo.complete}) : todos.filter((todo) => {return !todo.complete})

    // render the coressponding list of todos based 
    return (
        <>
            {filterTodosList.map((todo, todoIndex) => {
                return (
                    <TodoCard key = {todoIndex}  todo = {todo}/>
                )
            })}
        </>
    );
}

