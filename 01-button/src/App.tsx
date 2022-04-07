import React, {MouseEvent} from 'react';
import './App.css';


function App() {
    /*const myFirstSub =(event: MouseEvent<HTMLButtonElement>) => {
        console.log('Hello! i am Vasya')
    }
    const mySecondSub =(event: MouseEvent<HTMLButtonElement>)=> {
        console.log('Hello! i am  Ivan')
    }*/

     const onCliCkHandler =(name: string)=>{
         console.log(name)
     }

/*    const foo1 = () => {
        console.log('100200')
// Ничего не передавать, но в консоли должно показаться 100200
    }

    const foo2 = (num: number) => {
        console.log(num)
        // передать 100200
    }*/

    return (
        <div className='App'>
             {/*  <button onClick={(event) =>{console.log('Hello!')}}>Say Hello 1</button>*/}
            <button onClick={(event)=>onCliCkHandler('Vasya')}>MyYouTubeChanel-1</button>
            <button onClick={(event)=>onCliCkHandler( 'Ivan')}>MyYouTubeChanel-2</button>
           {/* <button onClick={() =>onCliCkHandler( 'Ivan')}>MyYouTubeChanel-2</button>*/}

         {/*   <button onClick={foo1}>1</button>
            <button onClick={() => foo2(100200)}>2</button>*/}
        </div>

    )

}

export default App;

