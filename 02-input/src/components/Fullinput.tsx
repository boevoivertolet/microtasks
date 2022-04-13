import React, {ChangeEvent, useState} from 'react';



export type  FullInputType ={
    addMessage: (title: string) => void
}


export const FullInput = (props: FullInputType) => {
    let [title, setTitle] =useState('')

  /*  const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)

    }
    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }*/

  return (
      <div>
          <div>

              {/*<input value={title} onChange={onChangeInputHandler}/>
              <button onClick={onClickButtonHandler}>+</button>*/}
          </div>
      </div>
  )
}
