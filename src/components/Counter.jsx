import {useState} from "react";

function Counter(){
    const step = 3;
    const [count, setCount] = useState(0);

    const increm = () => setCount(count + step);
    const decrem = () => setCount(count - step);

    return (
        <div style={{ margin: "50px", textAlign: "center" }}>
            <h2>Counter: {count}</h2>
            <button onClick={decrem} style={{ marginRight: "10px" }}>- {step}</button>
            <button onClick={increm}>+ {step}</button>
        </div>
    );
}
export default Counter;