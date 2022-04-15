import React from 'react';
import {FilterType} from '../App';

export type MoneyType = {
    banknotes: string
    value: number
    number: string


}

export type NewComponentType = {
    money: MoneyType[]
    onClickFilterHandler: (nameButton: FilterType) => void
}


export const NewComponent = (props: NewComponentType) => {
    return (
        <>

            <ul>
                {props.money.map((objFromMoneyArr, index) => {
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
                <button onClick={() => props.onClickFilterHandler('all')}>all</button>
                <button onClick={() => props.onClickFilterHandler('rubles')}>rubles</button>
                <button onClick={() => props.onClickFilterHandler('dollars')}>dollars</button>
            </div>
        </>

    )

}
