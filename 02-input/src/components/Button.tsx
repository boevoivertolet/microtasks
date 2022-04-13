import React from 'react';
import {MouseEvent} from 'react';

type ButtonPropsType ={
    name: string
    callBack: () => void
}



export const Button = (props: ButtonPropsType) => {
    const onClickButtonHandler = (event: MouseEvent<HTMLButtonElement>) => {
        props.callBack()

    }
    return (
        <div className={'App'}>
            <button onClick={onClickButtonHandler}>{props.name}</button>
        </div>
    )
}