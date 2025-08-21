import './App.css'
import Table from "./components/Table.jsx";
import Counter from "./components/Counter.jsx";
import Greeting from "./components/Greeting.jsx";

function App() {

  return (
    <>
        <h1 style={{ margin: "50px", textAlign: "center" }}>Hello, friend!</h1>
        <h2 style={{ margin: "50px", textAlign: "center" }}>These are the books I liked.</h2>
        <Table/>
        <Counter/>
        <Greeting/>

    </>
  )
}

export default App
