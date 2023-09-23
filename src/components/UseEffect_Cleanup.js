import { useState, useEffect } from "react";

export default function Demo() {
    const [ashu, setAshu] = useState(0)

    useEffect(() => {

        let myinterval = setInterval(() => {
            if (ashu === 10) {
                clearInterval(myinterval)
                console.log(ashu)
            }
            else {
                setAshu(ashu + 1)
            }

        }, 1000)
        return () => {
            clearInterval(myinterval)
        }
    }, [ashu])

    return (

        <>
            <h1>This is fun bro!!!! </h1>
            <h2>Let see our changing value [ {ashu} ]</h2>
        </>
    );
}
