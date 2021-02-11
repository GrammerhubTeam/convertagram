import { Units } from "../models/converter.model";

const units: Units = {};

units["cum"] = {
  unit: "cum",
  base: "cum",
  name: "cubic meter",
  type: "volume",
  factor: 1,
};
units["cudm"] = {
  unit: "cudm",
  base: "cum",
  name: "cubic decimeter",
  type: "volume",
  factor: 0.001,
};
units["ltr"] = {
  unit: "ltr",
  base: "cum",
  name: "liter",
  type: "volume",
  factor: 0.001,
};
units["cc"] = {
  unit: "cc",
  base: "cum",
  name: "cubic centimeter",
  type: "volume",
  factor: 0.000001,
};
units["mL"] = {
  unit: "mL",
  base: "cum",
  name: "milliliter",
  type: "volume",
  factor: 0.000001,
};
units["cuin"] = {
  unit: "cuin",
  base: "cum",
  name: "cubic inch",
  type: "volume",
  factor: 0.000016387,
};
units["cuft"] = {
  unit: "cuft",
  base: "cum",
  name: "cubic foot",
  type: "volume",
  factor: 0.028317,
};
units["usgal"] = {
  unit: "usgal",
  base: "cum",
  name: "US gallon",
  type: "volume",
  factor: 0.003785,
};
units["impgal"] = {
  unit: "impgal",
  base: "cum",
  name: "Imperial gallon",
  type: "volume",
  factor: 0.004545,
};
units["usbrl"] = {
  unit: "usbrl",
  base: "cum",
  name: "US barrel",
  type: "volume",
  factor: 0.15897,
};
units["cuyd"] = {
  unit: "cuyd",
  base: "cum",
  name: "cubic yard",
  type: "volume",
  factor: 0.764554857984,
};
// TODO: Add Tbs Tsp Cups etc.
// TODO: Add Bushel Peck etc.

export { units as volumeUnits };
