import React from "react";

type InputButtonType = {
  name: string,
  add: ()=>void
}

export const InputButton = (props: InputButtonType) => {
  const onClickButton=()=> {
    props.add()
  }
  return <button onClick={onClickButton}>{props.name}</button>;
};
