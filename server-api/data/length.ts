import { Units } from "../models/converter.model";

const units: Units = {};

units['m'] = {unit:'m', base: 'm', name: 'meter', type: 'length', factor: 1};
units['cm'] = {unit:'cm', base: 'm', name: 'centimeter', type: 'length', factor: 0.01};
units['mm'] = {unit:'mm', base: 'm', name: 'milimeter', type: 'length', factor: 0.001};

export { units as lengthUnits };