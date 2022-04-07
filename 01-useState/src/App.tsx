import React,{useState} from 'react';
import './App.css';



function App() {
// let a =1
    let[a, setA]=useState(1)

    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }
    const dropToZero = () => {
        setA(a=0)
        console.log(a)

    }

    return (
        <div className={"App"}>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>+1</button>
            <button onClick={dropToZero}>0</button>

        </div>

    )

}

export default App;

