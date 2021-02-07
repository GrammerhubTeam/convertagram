// import { englishLengths } from "../data/engLengths";
// import { intlLengths } from "../data/intlLengths";

import { UnitOfMeasure } from "./../types/unitOfMeasure";

const convertFrom = (unit: { from: UnitOfMeasure }): void => {
  console.log(`Base unit: ${unit.from}`);
};

const convertTo = (unit: { to: UnitOfMeasure; value: number }): void => {
  console.table(`Convert unit: ${unit.to}, Converted value: ${unit.value}`);
};

convertFrom({
  from: {
    name: "meter",
    abbreviation: "m",
    type: "length",
    factor: 1,
  },
});

convertTo({
  to: {
    name: "yards",
    abbreviation: "yd",
    type: "length",
    factor: 1.0936,
  },
  value: 10,
});

export const printLenghtUnits = {
  ...convertFrom,
  ...convertTo,
};
