import { useState } from "react";
import './Text.css'
const Test = (props) => {
    const mystyle = {
        border: "2px Solid Black",
        color: 'white',
        backgroundColor: "hotpink",
        height: '40px',
        width: '26rem',
        fontSize: '20px'

}

const [text, setText] = useState('Try To  Edit me')

function EditMe(e) {
    setText(e.target.value)
}
function UpperCase() {
    let me = text.toUpperCase()
    setText(me)
}

return (

    <>
        <div className="mymargin">
            <br />

            <div>
                <h2 className="center" style={mystyle}>Welcome To the React Testing</h2>
            </div>

            <br />

            <div>
                <textarea className="dark" onChange={EditMe} value={text} rows={8} cols={50}></textarea>
            </div>

            <div>
                <button onClick={UpperCase}>Uppercase</button>
            </div>
        </div>
    </>

)

}


export default Test;