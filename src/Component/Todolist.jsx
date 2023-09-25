//To-Do-List-APP
import React, { useState } from 'react'
import '../Component/CssFile/Todolist_style.css'
function Todolist() {
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([]);

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }
    const submitForm = (event) => {
        event.preventDefault();

        if (inputValue.trim() === '') {
            console.log('submit')
            return;
        }
        else {
            setItems([...items, inputValue])
            setInputValue('');
            console.log('else working')
        }

    }

    return (<>
        <div className="background">

            <div id='pdiv'>
                <p className='pgraph'>WELCOME TO TODOLIST APP</p>
            </div>
            <form onSubmit={submitForm}>
                <div className="container">
                    <input type='Text' id='inp' onChange={handleInput} value={inputValue} placeholder="Don't be afraid" />
                    <button id='btn'>Add Details</button>
                </div>

                <hr />
                <div>
                    <ul id='myul'> {items.map((myloop, index) => {
                      return  <li key={index}>{myloop}</li>
                    })}
                    </ul>
                </div>
            </form>

        </div>
    </>)
}

export default Todolist