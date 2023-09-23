import { useState, useEffect } from "react"

export default function MyuseEffect(){
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);//if you put count here It will give me infinte loop


    return (
        <>
            <h1> My fount value is :{count}: Awesome</h1>
        </>
    )
}
