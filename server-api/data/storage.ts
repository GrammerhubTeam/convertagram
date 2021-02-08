import { Units } from '../models/converter.model';

const units: Units = {};

units['b'] = {unit:'b', base: 'b', name: 'byte', type: 'storage', factor: 1, dataSource: "https://physics.nist.gov/cuu/Units/binary.html" };
units['kb'] = {unit:'kb', base: 'b', name: 'kilobyte', type: 'storage', factor: 1000, dataSource: "https://physics.nist.gov/cuu/Units/binary.html" };
units['mb'] = {unit:'mb', base: 'b', name: 'megabyte', type: 'storage', factor: 1000000, dataSource: "https://physics.nist.gov/cuu/Units/binary.html" };
units['gb'] = {unit:'gb', base: 'b', name: 'gigabyte', type: 'storage', factor: 1000000000, dataSource: "https://physics.nist.gov/cuu/Units/binary.html" };
units['tb'] = {unit:'tb', base: 'b', name: 'terabyte', type: 'storage', factor: 1000000000000, dataSource: "https://physics.nist.gov/cuu/Units/binary.html" };
units['pb'] = {unit:'pb', base: 'b', name: 'petabyte', type: 'storage', factor: 1000000000000000, dataSource: "https://physics.nist.gov/cuu/Units/binary.html" };
units['eb'] = {unit:'eb', base: 'b', name: 'exabyte', type: 'storage', factor: 1000000000000000000, dataSource: "https://physics.nist.gov/cuu/Units/binary.html" };
units['zb'] = {unit:'zb', base: 'b', name: 'zettabyte', type: 'storage', factor: 1000000000000000000000, dataSource: "https://www.eecis.udel.edu/~amer/Table-Kilo-Mega-Giga---YottaBytes.html" };
units['yb'] = {unit:'yb', base: 'b', name: 'yottabyte', type: 'storage', factor: 1000000000000000000000000, dataSource: "https://www.eecis.udel.edu/~amer/Table-Kilo-Mega-Giga---YottaBytes.html" };

units['kib'] = {unit:'kib', base: 'b', name: 'kibibyte', type: 'storage', factor: Math.pow(2, 10), dataSource: "https://physics.nist.gov/cuu/Units/binary.html" };
units['mib'] = {unit:'mib', base: 'b', name: 'mebibyte', type: 'storage', factor: Math.pow(2, 20), dataSource: "https://physics.nist.gov/cuu/Units/binary.html" };
units['gib'] = {unit:'gib', base: 'b', name: 'gibibyte', type: 'storage', factor: Math.pow(2, 30), dataSource: "https://physics.nist.gov/cuu/Units/binary.html" };
units['tib'] = {unit:'tib', base: 'b', name: 'tebibyte', type: 'storage', factor: Math.pow(2, 40), dataSource: "https://physics.nist.gov/cuu/Units/binary.html" };
units['pib'] = {unit:'pib', base: 'b', name: 'pebibyte', type: 'storage', factor: Math.pow(2, 50), dataSource: "https://physics.nist.gov/cuu/Units/binary.html" };
units['eib'] = {unit:'eib', base: 'b', name: 'exibyte', type: 'storage', factor: Math.pow(2, 60), dataSource: "https://physics.nist.gov/cuu/Units/binary.html" };
units['zib'] = {unit:'zib', base: 'b', name: 'zebibyte', type: 'storage', factor: Math.pow(2, 70), dataSource: "https://www.geeksforgeeks.org/understanding-file-sizes-bytes-kb-mb-gb-tb-pb-eb-zb-yb/" };
units['yib'] = {unit:'yib', base: 'b', name: 'yobibyte', type: 'storage', factor: Math.pow(2, 80), dataSource: "https://www.geeksforgeeks.org/understanding-file-sizes-bytes-kb-mb-gb-tb-pb-eb-zb-yb/" };

//? Will need Math library for this

export { units as storageUnits }