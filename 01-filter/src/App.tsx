import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./components/NewComponent";




export type FilterType='all'| 'dollars'|'rubles'

function App() {
   /* const [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: ' a1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' z1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' w1234567890'},
        {banknote: 'dollar', nominal: 100, number: ' e1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' c1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' r1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' x1234567890'},
        {banknote: 'ruble', nominal: 50, number: ' v1234567890'},
    ])*/
    const [money, setMoney] = useState([
        { banknotes: 'Dollars', value: 100, number: ' a1234567890' },
        { banknotes: 'Dollars', value: 50, number: ' z1234567890' },
        { banknotes: 'RUBLES', value: 100, number: ' w1234567890' },
        { banknotes: 'Dollars', value: 100, number: ' e1234567890' },
        { banknotes: 'Dollars', value: 50, number: ' c1234567890' },
        { banknotes: 'RUBLES', value: 100, number: ' r1234567890' },
        { banknotes: 'Dollars', value: 50, number: ' x1234567890' },
        { banknotes: 'RUBLES', value: 50, number: ' v1234567890' },
    ])

    const[filter,setFilter]=useState<FilterType>('all')

    let currentMoney = money;
    if (filter === 'dollars') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknotes === 'Dollars');
    }
    if (filter === 'rubles') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknotes === 'RUBLES');
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }
    return (
        <>
            <NewComponent
              onClickFilterHandler={onClickFilterHandler}
              money={currentMoney}
            />

           {/* <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span> {objFromMoneyArr.banknotes}</span>
                            <span> {objFromMoneyArr.value}</span>
                            <span> {objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHandler('all')}>all</button>
                <button onClick={() => onClickFilterHandler('rubles')}>rubles</button>
                <button onClick={() => onClickFilterHandler("dollars")}>dollars</button>
            </div>*/}
        </>


    );
}

export default App;

