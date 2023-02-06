import React from "react";
import { v4 } from 'uuid'


type NewComponentType = {
  students: StudentsType[];
  cars: CarsType[];
};
type StudentsType = {
  id: number;
  name: string;
  age: number;
};

type CarsType = {
  manufacturer: string;
  model: string;
};

export const NewComponent = (props: NewComponentType) => {
  return (
    <div>
      <ul>
        {props.students.map(
          (objectFromStudentsArray: StudentsType, index: number) => {
            return (
              <li key={objectFromStudentsArray.id}>
                <span>{objectFromStudentsArray.name}</span>
                <span> age: {objectFromStudentsArray.age}</span>
              </li>
            );
          }
        )}
      </ul>
      {props.cars.map((objectFromCarsArray: CarsType) => {
        return (
          <table>
            <thead>
              <tr>
                <th>Auto</th>
                <th>Model</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td key={v4()}>{objectFromCarsArray.manufacturer}</td>
                <td key={v4()}>{objectFromCarsArray.model}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};
