import React, { ChangeEvent, useState } from "react";

export type FullInputType = {
  add: (title:string)=>void
}
export const Input=(props: FullInputType)=> {
  let [title, setTitle] = useState('');
  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>)=>{
    setTitle(event.currentTarget.value)
  }
  const onClickButton=()=> {
    props.add(title)
    setTitle('')
  }
  return (
    <div>
        <input value={title} onChange={onChangeInputHandler}/>
        <button onClick={onClickButton}>+</button>
      </div>
  )
}
