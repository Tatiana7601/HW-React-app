import {useState} from "react";

function Greeting(){
    const [name, setName] = useState("");
    const [message, setMessage]=useState("");

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
            {message && <h2>{message}</h2>}
        </div>
    );
}
export default Greeting;