import { Units } from "../models/converter.model";

const units: Units = {};

units['m³'] = {unit:'m³', base: 'm³', name: 'cubic meter', type: 'volume', factor: 1};
units['dm³'] = {unit:'dm³', base: 'm³', name: 'cubic decimeter', type: 'volume', factor: .001};
units['ltr'] = {unit:'ltr', base: 'm³', name: 'liter', type: 'volume', factor: .001};
units['cc'] = {unit:'cc', base: 'm³', name: 'cubic centimeter', type: 'volume', factor: .000001};
units['mL'] = {unit:'mL', base: 'm³', name: 'milliliter', type: 'volume', factor: .000001};
units['in³'] = {unit:'in³', base: 'm³', name: 'cubic inch', type: 'volume', factor: .000016387};
units['ft³'] = {unit:'ft³', base: 'm³', name: 'cubic foot', type: 'volume', factor: .028317};
units['US gal'] = {unit:'US gal', base: 'm³', name: 'US gallon', type: 'volume', factor: .003785};
units['Imp. gal'] = {unit:'Imp. gal', base: 'm³', name: 'Imperial gallon', type: 'volume', factor: .004545};
units['US brl'] = {unit:'US brl', base: 'm³', name: 'US barrel', type: 'volume', factor: .15897};
units['yd³'] = {unit:'yd³', base: 'm³', name: 'cubic yard', type: 'volume', factor: 0.764554857984};
// TODO: Add Tbs Tsp Cups etc.
// TODO: Add Bushel Peck etc.

export { units as volumeUnits };