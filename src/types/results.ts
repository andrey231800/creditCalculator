import { NumStr } from "./customTypes";

export interface IInput {
    secondSelect: string;
    payPerMonth: NumStr
    totalPaying: NumStr
    totalOverpayment: NumStr
    difTotalPaying: NumStr
}