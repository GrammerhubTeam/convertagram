import { UnitOfMeasure } from "../types/unitOfMeasure";

let units: { [base: string]: UnitOfMeasure } = {};

units.kilometer = {
  name: "kilometer",
  abbreviation: "km",
  type: "length",
  factor: 1000.0,
};

units.meter = {
  name: "meter",
  abbreviation: "m",
  type: "length",
  factor: 1,
};

units.centimeter = {
  name: "centimeter",
  abbreviation: "cm",
  type: "length",
  factor: 0.01,
};

units.milimeter = {
  name: "milimiter",
  abbreviation: "mm",
  type: "length",
  factor: 0.001,
};

export { units as intlLengths };
