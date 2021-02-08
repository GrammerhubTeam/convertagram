import { Units } from '../models/converter.model';

const units: Units = {}

units['c'] = { unit: 'c', name: 'celsius', base: 'c', type: 'temperature', 'factor': 1, dataSource: 'https://www.britannica.com/technology/Celsius-temperature-scale'}
units['k'] = { unit: 'f', name: 'fahrenheit', base: 'c', type: 'temperature', 'factor': 1, dataSource: 'https://www.britannica.com/technology/Celsius-temperature-scale'}
// Celsius -> Fahrenheit: (C * 9/5) + 32 = F  //\\ Fahrenheit -> Celsius: (F - 32) * 5/9 = C
units['f'] = { unit: 'k', name: 'kelvins', base: 'c', type: 'temperature', 'factor': 1, dataSource: 'https://www.britannica.com/science/kelvin'}
// Celsius -> Kelvins: C + 273.15 = K  //\\ Kelvins -> Celsius: K - 273.15 = C

export { units as temperatureUnits }