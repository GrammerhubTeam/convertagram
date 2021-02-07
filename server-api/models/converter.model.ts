// import { UnitOfMeasure } from "./../types/unitOfMeasure";

export interface ConverterValue {
  from: string;
  to: string;
  factor: number;
}

// export interface ConverterValue {
//   from: UnitOfMeasure;
//   to: UnitOfMeasure;
//   value: number;
// }

export interface UnitReference {
  unit?: string;
  name: string;
  base: string;
  type: string;
  factor: number;
}

export interface Units {
  [x: string]: ConverterValue;
}
