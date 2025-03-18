import { useState } from "react";

export function TodoInput({handleAddTodo}) {
    const [inputValue, setInputValue] = useState('');
    // console.log(inputValue);

    return (
        <div className="input-container">
            <input value={inputValue} onChange={(e) => {setInputValue(e.target.value)}} placeholder="Add Todo" />
            <button onClick={() => {
                if (!inputValue) { return; }
                handleAddTodo(inputValue);
                setInputValue('');
            }}>
                <i class="fa-solid fa-plus"></i>
            </button>
        </div>
    );
}