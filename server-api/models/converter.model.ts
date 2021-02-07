 
export interface ConverterValue{
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
    system?: string;
    dataSource?: string;
}

export interface Units {
    [x: string]: UnitReference
}
