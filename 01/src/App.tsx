import React, {useState} from 'react';
import './App.css';
import {TopCars} from "./components/TopCars";

/*import {NewComponent} from "./components/NewComponent";*/


function App() {
    /*let [students, setStudents] = useState([
            {id: 1, name: 'James1 ', age: 81},
            {id: 2, name: 'James2 ', age: 82},
            {id: 3, name: 'James3 ', age: 83},
            {id: 4, name: 'James4 ', age: 84},
            {id: 5, name: 'James5 ', age: 85},
            {id: 6, name: 'James6 ', age: 86},
            {id: 7, name: 'James7 ', age: 87},
            {id: 8, name: 'James8 ', age: 88},
            {id: 9, name: 'James9 ', age: 89},
            {id: 10, name: 'James10 ', age: 80},
            {id: 11, name: 'James11 ', age: 880},
        ]
    )
*/
    const [topCars, setCars] = useState([
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]);


    return (

        <TopCars models={topCars}/>

        /*  <NewComponent students={students}/>*/


    );

}

export default App;

