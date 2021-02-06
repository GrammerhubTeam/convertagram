import { Units } from "../models/converter.model";

const units: Units= {};

units['yr'] = { unit: 'yr', base: 's', name: 'year', type: 'time', factor: 52*7*24*60*60 };
// month calculated by average number of ms per month
units['mo'] = { unit: 'mo', base: 's', name: 'month', type: 'time', factor: 52*7*24*60*60/12 };
units['wk'] = { unit: 'wk', base: 's', name: 'week', type: 'time', factor: 7*24*60*60 };
units['d'] = { unit: 'd', base: 's', name: 'day', type: 'time', factor: 24*60*60 };
units['hr'] = { unit: 'hr', base: 's', name: 'hour', type: 'time', factor: 60*60 };
units['min'] = { unit: 'min', base: 's', name: 'minute', type: 'time', factor: 60 };
// base unit
units['s'] = { unit: 's', base: 's', name: 'second', type: 'time', factor: 1 };
units['ms'] = { unit: 'ms', base: 's', name: 'millisecond', type: 'time', factor: 1/1000 };
units['ns'] = { unit: 'ns', base: 's', name: 'nanosecond', type: 'time', factor: 1/1000000000 };

export { units as timeUnits};