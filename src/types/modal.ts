import { NumStr } from "./customTypes";


export interface IActive {
    active: boolean;
    setActive: (arg: boolean) => void;
}

export interface IDetails {
    input: NumStr;
    select: NumStr;
    secondSelect: string;
    payPerMonth: NumStr;
    totalPaying: NumStr;
    totalOverpayment: NumStr;
    difTotalPaying: NumStr;
    inputProcents: NumStr;
}

export interface IContent {
    select: NumStr;
    input: NumStr
    payPerMonth: NumStr;
    inputProcents: NumStr;
}