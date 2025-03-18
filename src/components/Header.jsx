export function Header({todos}) {
    const todoLength = todos.length;

    const isTaskPlural = todoLength > 1;

    return (
        <header>
            <h1 className="text-gradient">You have {todoLength} open {isTaskPlural ? 'tasks' : 'task'}.</h1>
        </header>
    );
}