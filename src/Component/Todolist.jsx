import React, { useState } from 'react';
import '../Component/CssFile/Todolist_style.css';
import { v4 as uuidv4 } from 'uuid';
import { FaTrash, FaEdit, FaCheck, FaTimes } from 'react-icons/fa';


function Todolist() {
    const [userInput, setuserInput] = useState('') //empty string - value of input 
    const [Items, setItems] = useState([]) // emptyp array - will become the value.. 


    let itemNumber = 1; // Variable to keep track of the number

    function CrudFun(event) {
        event.preventDefault();
        if (userInput.trim() === '') {
            return;
        } else {
            setItems((currentItems) => {

                const newList = { id: uuidv4(), text: userInput, completed: false }
                const updatedListData = [...currentItems, newList];

                setuserInput('');

                return updatedListData;
            })
        }
    }

    function removeLiElement(id) {

        const updatedListData = Items.filter((item) => item.id !== id) //returning the new item after remove the specific id 

        setItems(updatedListData); // assinging the new array items after removing the old items

    }
    //handle complete
    function handleComplete(id) {
        const updatedListData = Items.map((item) => {
            if (item.id === id) {
                return { ...item, completed: !item.completed }; //true hai to false or false hai to true 
            }
            return item;
        });
        setItems(updatedListData);
    }
    // edit item
    function handleEdit(id) {
        const edit = prompt("hello world", Items.find(item => item.id === id)?.text)
        if (edit !== null) {
            const editedListData = Items.map((item) => {

                if (item.id === id) {
                    return { ...item, text: edit };
                }
                return item;
            });
            setItems(editedListData);
        }
    }
    //remove all items
    function removeAll() {
        setItems([]);
    }

    return (
        <>
            <nav id='mynav'><p id='earth'></p>ToDo-LIST APP</nav>

            <div className="background">
                <form onSubmit={CrudFun}>
                    <div className="container">
                        <input
                            type='Text'
                            id='inp'
                            onChange={(e) => setuserInput(e.target.value)}
                            value={userInput}
                            placeholder="Enter a task..."
                        />
                        <button id='btn'>Add Details</button>
                    </div>

                    <div>
                        <ul id='myul'>
                            {Items.length > 0 && Items.map((item) => (
                                <li key={item.id}><span>{itemNumber++}.  {item.text}</span>

                                    <div id='allButtons'>
                                        <button id='edit' onClick={() => handleEdit(item.id)}><FaEdit /></button>

                                        <button id='complete' onClick={() => handleComplete(item.id)}>
                                            {item.completed ? <FaCheck /> : <FaTimes />}
                                        </button>

                                        <button id='del' onClick={() => removeLiElement(item.id)}><FaTrash /></button>

                                    </div>
                                </li>
                            ))}
                            {Items.length >= 1 && (
                                <div className='center' >
                                    <button id='removeAll' onClick={removeAll}>Clear</button>
                                </div>
                            )}
                        </ul>
                    </div>
                </form>
            </div>
            <footer id="footer">
                <p>&copy; 2023 MAINTAINED BY ASHUTOSH SINGH</p>
            </footer>
        </>
    )
}

export default Todolist;