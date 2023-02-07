import React from "react";

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
          (objectFromStudentsArray: StudentsType) => {
            return (
              <li key={objectFromStudentsArray.id}>
                <span>{objectFromStudentsArray.name}</span>
                <span> age: {objectFromStudentsArray.age}</span>
              </li>
            );
          }
        )}
      </ul>
      {props.cars.map((objectFromCarsArray: CarsType, index: number) => {
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
                <td key={index + 1}>{objectFromCarsArray.manufacturer}</td>
                <td key={index + 2}>{objectFromCarsArray.model}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};
