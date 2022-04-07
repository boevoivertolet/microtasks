import React from 'react';
import './App.css';
import {Button} from "./components/Button";


function App() {
    const Button1Foo = (name: string, age: number, adress: string) => {
        console.log(name, age, adress)
    }
    const Button2Foo = (name: string, age: number, adress: string) => {
        console.log(name, age, adress)
    }
    const Button3Foo = (text: string) => {
        console.log(text)
    }


    return (
        <div className={'App'}>
            <Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo('Im Sasha', 34, 'Spb')}/>
            <Button name={'MyYouTubeChanel-2'} callBack={() => Button2Foo('Im Ulya', 32, 'Minsk')}/>
            <Button name={'Stupid button'} callBack={() => Button3Foo('Im Stupid button =(')}/>
        </div>

    )

}

export default App;

