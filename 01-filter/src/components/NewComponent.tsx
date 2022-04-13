import React from 'react';

export type MoneyType = {
    banknotes: string
    value: number
    number: number
}

export type NewComponentType = {
    money: MoneyType[]
}


export const NewComponent = (props: NewComponentType) => {
    return (
        <>

            <ul>
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
                <button onClick={() => onClickFilterHandler('dollars')}>dollars</button>
            </div>
        </>

    )

}
