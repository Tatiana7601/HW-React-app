import {useState} from "react";

function Greeting(){
    const [name, setName] = useState("");
    const [message, setMessage]=useState("Please enter your name");

   function handleChange(event){
        setName(event.target.value);
   }

   function handleGreet(){
       if (name.trim()=== ""){
           setMessage("Please enter your name");
       } else{
           setMessage (`Welcome ${name}!`);
           setName("");
       }
   }

    return (
        <div style={{ marginTop: "100px", textAlign: "center" }}>
            <input type="text" value={name} onChange={handleChange}/>
            <button onClick={handleGreet}>Click</button>
            {message && <h1>{message}</h1>}
        </div>
    );
}
export default Greeting;