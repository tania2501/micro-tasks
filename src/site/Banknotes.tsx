import React, { useState } from "react";
import App from "../App";
export type FilterButtonsType = 'All' | 'Ruble' | 'Dollar'

type MoneyType = {
  banknote: string;
  nominal: number;
  number: string;
};
type MoneyButt = {
  title: MoneyType[]
  button: (arg0: FilterButtonsType)=>void
}

export const Banknotes = (props: MoneyButt) => {
  const onClickFilter = (name: FilterButtonsType) => {
  props.button(name);
};

  return (
    <>
      <ul>
        {props.title.map((objFromMoneyArr, index: number) => {
          return (
            <li key={index + 1}>
              <span>{objFromMoneyArr.banknote} </span>
              <span>{objFromMoneyArr.nominal} </span>
              <span>{objFromMoneyArr.number}</span>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={()=>onClickFilter('All')}>All</button>
        <button onClick={()=>onClickFilter('Dollar')}>Dollar</button>
        <button onClick={()=>onClickFilter('Ruble')}>Ruble</button>
      </div>
    </>
  );
};
