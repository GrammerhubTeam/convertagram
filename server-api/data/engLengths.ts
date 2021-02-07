import { UnitOfMeasure } from "../types/unitOfMeasure";

let units: { [base: string]: UnitOfMeasure } = {};

units.yard = {
  name: "yard",
  abbreviation: "yard",
  type: "length",
  factor: 1.0936,
};

units.mile = {
  name: "mile",
  type: "length",
  factor: 0.00062137,
};

units.feet = {
  name: "feet",
  abbreviation: "ft",
  type: "length",
  factor: 3.2808,
};

units.inch = {
  name: "inch",
  abbreviation: "in",
  type: "length",
  factor: 39.37,
};

export { units as englishLengths };
