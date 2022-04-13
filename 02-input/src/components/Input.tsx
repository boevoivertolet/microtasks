import React, {ChangeEvent} from 'react';



type FullInputPropsType ={
   setTitle: (title: string) => void
    title: string
}


export const Input = (props: FullInputPropsType) => {
    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)

    }

    return (
        <div className={'App'}>
            <input value={props.title} onChange={onChangeInputHandler}/>
        </div>
    )
}