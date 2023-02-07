import React, { ChangeEvent } from "react";

type MainInputType ={
  setTitle: (title: string)=>void
  title: string
}
export const MainInput = (props: MainInputType) => {
  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>)=>{
    props.setTitle(event.currentTarget.value)
  }
  return  <input value={props.title} onChange={onChangeInputHandler}/>;
};
