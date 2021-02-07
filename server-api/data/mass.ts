import { Units } from "../models/converter.model";

const units: Units = {};

units['pg'] = { unit:'pg', base: 'kg', name: 'picogram', type: 'mass', factor: 1/1000000000000000 };
units['ng'] = { unit:'ng', base: 'kg', name: 'nanogram', type: 'mass', factor: 1/1000000000000 };
units['ug'] = { unit:'ug', base: 'kg', name: 'microgram', type: 'mass', factor: 1/1000000000 };
units['mg'] = { unit:'mg', base: 'kg', name: 'miligram', type: 'mass', factor: 1/1000000 };
units['cg'] = { unit:'cg', base: 'kg', name: 'centigram', type: 'mass', factor: 1/100000 };
units['dg'] = { unit:'dg', base: 'kg', name: 'decigram', type: 'mass', factor: 1/10000 };
units['g'] = { unit:'g', base: 'kg', name: 'gram', type: 'mass', factor: 1/1000 };
units['dag'] = { unit:'dag', base: 'kg', name: 'dekagram', type: 'mass', factor: 1/100 };
units['hg'] = { unit:'hg', base: 'kg', name: 'hectogram', type: 'mass', factor: 1/10 } ;
units['kg'] = { unit:'kg', base: 'kg', name: 'kilogram', type: 'mass', factor: 1 } ;
units['Mg'] = { unit:'Mg', base: 'kg', name: 'megagram', type: 'mass', factor: 1*1000 };
units['Gg'] = { unit:'Gg', base: 'kg', name: 'gigagram', type: 'mass', factor: 1*1000000 };
units['Tg'] = { unit:'Tg', base: 'kg', name: 'teragram', type: 'mass', factor: 1*1000000000 };
units['Pg'] = { unit:'Pg', base: 'kg', name: 'petagram', type: 'mass', factor: 1*1000000000000 } ;

units['t'] = { unit:'t', base: 'kg', name: 'metric ton', type: 'mass', factor: 1*1000 } ;
units['lb'] = { unit:'lb', base: 'kg', name: 'pound', type: 'mass', factor: 1*0.45359237 } ;
units['oz'] = { unit:'oz', base: 'kg', name: 'ounce', type: 'mass', factor: 1*0.45359237/16 } ;
units['gr'] = { unit:'gr', base: 'kg', name: 'grain', type: 'mass', factor: 1*0.45359237/7000 } ;
units['ton'] = { unit:'ton', base: 'kg', name: 'ton', type: 'mass', factor: 1*0.45359237*2000 } ;

units['Da'] = { unit:'Da', base: 'kg', name: 'dalton', type: 'mass', factor: 1*1.6605390666050*10**-27 } ;

export { units as massUnits  };