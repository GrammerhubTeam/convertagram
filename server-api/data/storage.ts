import { Units } from '../models/converter.model';

const units: Units = {};

units['b'] = {unit:'b', base: 'b', name: 'byte', type: 'storage', factor: 1};
// Byte: 1
// Kilo Byte:   1000
// Mega Byte:   1000000
// Giga Byte:   1000000000
// Tera Byte:   1000000000000
// Peta Byte:   1000000000000000
// Exa Byte:    1000000000000000000
// Zetta Byte:  1000000000000000000000      *
// Yotta Byte:  1000000000000000000000000   *
// Kibibyte:    Math.pow(2, 10)
// Mebibyte:    Math.pow(2, 20)
// Gibibyte:    Math.pow(2, 30)
// Tebibyte:    Math.pow(2, 40)
// Pebibyte:    Math.pow(2, 50)
// Exibyte:     Math.pow(2, 60)
// Zebibyte:    Math.pow(2, 70)     **
// Yobibyte:    Math.poq(2, 80)     **
// https://physics.nist.gov/cuu/Units/binary.html
// *    https://www.eecis.udel.edu/~amer/Table-Kilo-Mega-Giga---YottaBytes.html
// **   https://www.geeksforgeeks.org/understanding-file-sizes-bytes-kb-mb-gb-tb-pb-eb-zb-yb/
