import React, { useContext } from 'react';
import Context from '../Hooks/Context.jsx';

function ContextApp() {
    const { count2, setCount2, count, setCount } = useContext(Context);

    function incrementCount() {
        if (count !== 1000) {

            setCount(count + 100);
        }
        else {
            setCount(count - 1000);
        }
    }



    function ToggleCount2() {
        setCount2(!count2);
    }

    return (
        <div>
            <div>
                <button onClick={incrementCount}>Increment Count</button>
                <p>Count: {count}</p>
                <button onClick={ToggleCount2}>ToggleCount2</button>
                <p>Count2: {count2 ? "On" : "oFF"}</p>
            </div>
        </div>
    );
}

export default ContextApp;
