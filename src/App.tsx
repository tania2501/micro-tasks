import React from "react";
import "./App.css";
import { Header } from "./site/Header";
import { Body } from "./site/Body";
import { Footer } from "./site/Footer";
import { useState } from "react";
import { NewComponent } from "./site/NewComponent";
import { Button } from "./site/Button";
import { Banknotes } from "./site/Banknotes";
import { FilterButtonsType } from "./site/Banknotes";

function App() {
  /// Micro Task 1
  const [students] = useState([
    { id: 1, name: "James", age: 8 },
    { id: 2, name: "Robert", age: 18 },
    { id: 3, name: "John", age: 28 },
    { id: 4, name: "Michael", age: 38 },
    { id: 5, name: "William", age: 48 },
    { id: 6, name: "David", age: 58 },
    { id: 7, name: "Richard", age: 68 },
    { id: 8, name: "Joseph", age: 78 },
    { id: 9, name: "Thomas", age: 88 },
    { id: 10, name: "Charles", age: 98 },
    { id: 11, name: "Christopher", age: 100 },
  ]);

  /// Micro Task 2

  const [topCars] = useState([
    { manufacturer: "BMW", model: "X5" },
    { manufacturer: "Mercedes", model: "MLS" },
    { manufacturer: "Audi", model: "Q7" },
  ]);
  /// Micro Task 3

  const foo1 = () => {
    console.log("100200");
  };
  const foo2 = (number: number) => {
    console.log(number);
  };

  const buttonFoo1 = (subscriber: string) => {
    console.log(subscriber);
  };

  /// Micro Task 4

  let [a, setA] = useState(1);
  const onClickHandler = () => {
    setA(++a);
  };
  const onClickHandler2 = () => {
    setA(0);
  };
///// Micro task 5

const [money, setMoney] = useState([
  { banknote: "dollar", nominal: 100, number: "a123456789" },
  { banknote: "dollar", nominal: 50, number: "b123456789" },
  { banknote: "ruble", nominal: 100, number: "c123456789" },
  { banknote: "dollar", nominal: 100, number: "d123456789" },
  { banknote: "dollar", nominal: 50, number: "e123456789" },
  { banknote: "ruble", nominal: 100, number: "f123456789" },
  { banknote: "dollar", nominal: 50, number: "j123456789" },
  { banknote: "ruble", nominal: 50, number: "h123456789" },
]);
let newMoney = money;

const [filter, setFilter] = useState<FilterButtonsType>("All");
if (filter === "Dollar") {
  newMoney = money.filter(
    (filteredMoney) => filteredMoney.banknote === "dollar"
  );
}
if (filter === "Ruble") {
  newMoney = money.filter(
    (filteredMoney) => filteredMoney.banknote === "ruble"
  );
}
const clickFilter = (name: FilterButtonsType) => {
  setFilter(name)
}


  return (
    <div>
      <Header title={"NEW HEADER"} />
      <Body titleBody={"NEW BODY"} />
      <Footer titleFooter={"NEW FOOTER"} />
      <NewComponent students={students} cars={topCars} />
      <button onClick={foo1}>My button 1</button>
      <button
        onClick={(event) => {
          foo2(100200);
        }}
      >
        My button 2
      </button>
      <h1>{a}</h1>
      <Button name={"number"} callback={onClickHandler} />
      <Button name={"0"} callback={onClickHandler2} />
      <Banknotes title={newMoney} button={clickFilter}/>
    </div>
  );
}

export default App;
