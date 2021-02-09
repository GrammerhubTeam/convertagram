import { Units } from "../models/converter.model";

const units: Units = {};

units["cu m"] = {
  unit: "cu m",
  base: "cu m",
  name: "cubic meter",
  type: "volume",
  factor: 1,
};
units["cu dm"] = {
  unit: "cu dm",
  base: "cu m",
  name: "cubic decimeter",
  type: "volume",
  factor: 0.001,
};
units["ltr"] = {
  unit: "ltr",
  base: "cu m",
  name: "liter",
  type: "volume",
  factor: 0.001,
};
units["cc"] = {
  unit: "cc",
  base: "cu m",
  name: "cubic centimeter",
  type: "volume",
  factor: 0.000001,
};
units["mL"] = {
  unit: "mL",
  base: "cu m",
  name: "milliliter",
  type: "volume",
  factor: 0.000001,
};
units["cu in"] = {
  unit: "cu in",
  base: "cu m",
  name: "cubic inch",
  type: "volume",
  factor: 0.000016387,
};
units["cu ft"] = {
  unit: "cu ft",
  base: "cu m",
  name: "cubic foot",
  type: "volume",
  factor: 0.028317,
};
units["US gal"] = {
  unit: "US gal",
  base: "cu m",
  name: "US gallon",
  type: "volume",
  factor: 0.003785,
};
units["Imp. gal"] = {
  unit: "Imp. gal",
  base: "cu m",
  name: "Imperial gallon",
  type: "volume",
  factor: 0.004545,
};
units["US brl"] = {
  unit: "US brl",
  base: "cu m",
  name: "US barrel",
  type: "volume",
  factor: 0.15897,
};
units["cu yd"] = {
  unit: "cu yd",
  base: "cu m",
  name: "cubic yard",
  type: "volume",
  factor: 0.764554857984,
};
// TODO: Add Tbs Tsp Cups etc.
// TODO: Add Bushel Peck etc.

export { units as volumeUnits };
