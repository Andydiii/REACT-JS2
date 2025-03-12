export function Tabs() {
    const tabs = ['All', 'Open', 'Completed'];

    return (
        <nav>
            {tabs.map((tab, tabIndex) => {
                return (
                    // we map each of the button name to a button and return a button for each of them 
                    // each of the button needs to have a unique key
                    <button key={tabIndex} className="tab-button">
                        <h4>{tab} (0)</h4>
                    </button>
                );
            })}
        </nav>
    );
}