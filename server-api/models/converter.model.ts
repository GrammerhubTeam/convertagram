
export interface ConverterValue {
    to: string;
    from: string;
    value: number | BigInt;
    round?: number;
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

export interface ConverterResponse {
    convertedValue?: number;
    errors: {
        [x:string]: string
    };
    status: number;
}