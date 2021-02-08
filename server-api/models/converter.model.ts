
export interface ConverterValue {
    to: string;
    from: string;
    value: number;
}

export interface UnitReference {
    unit: string;
    name: string;
    base: string;
    type: string;
    factor: number;
}

export interface Units {
    [x: string]: UnitReference
}
