export function Tabs({todos}) {
    const tabs = ['All', 'Open', 'Completed'];
    const All = todos.length;
    const Open = todos.filter((todo) => {return !todo.complete}).length;
    const completed = All - Open;

    return (
        <nav>
            {/* go through each tab, count todos for each tab, render the tab with coressponding number of tasks */}
            {tabs.map((tab, tabIndex) => {
                const numOfTasks = tab === 'All' 
                    ? All           
                    : tab === 'Open'
                        ? Open
                        : completed;
                return (
                    // we map each of the button name to a button and return a button for each of them 
                    // each of the button needs to have a unique key
                    <button key={tabIndex} className="tab-button">
                        <h4>{tab} ({numOfTasks})</h4>
                    </button>
                );
            })}
        </nav>
    );
}