import { Units } from "../models/converter.model";

const units: Units = {};

units["yard"] = {
  unit: "yd",
  base: "m",
  name: "yard",
  type: "length",
  factor: 1.0936,
};
units["mile"] = {
  unit: "mile",
  base: "m",
  name: "mile",
  type: "length",
  factor: 3.2808,
};
units["ft"] = {
  unit: "ft",
  base: "m",
  name: "feet",
  type: "length",
  factor: 3.2808,
};
units["in"] = {
  unit: "in",
  base: "m",
  name: "inch",
  type: "length",
  factor: 39.7,
};

units["km"] = {
  unit: "km",
  base: "m",
  name: "kilometer",
  type: "length",
  factor: 1000.0,
};
units["m"] = { unit: "m", base: "m", name: "meter", type: "length", factor: 1 };
units["cm"] = {
  unit: "cm",
  base: "m",
  name: "centimeter",
  type: "length",
  factor: 0.01,
};
units["mm"] = {
  unit: "mm",
  base: "m",
  name: "milimeter",
  type: "length",
  factor: 0.001,
};

export { units as lengthUnits };
