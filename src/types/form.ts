import { HandleInputChange, HandleSelectChange, NumStr } from "./customTypes";


export interface IFetch {
    fetchingData:  NumStr;
    handleFetchChange: HandleInputChange
}

export interface ISelect {
    selectState: string;
    handleChangeSelect: HandleSelectChange
}

export interface Input {
    input: NumStr;
    handleChange: HandleInputChange;
}

export interface IUser {
    input: NumStr;
    handleChange: HandleInputChange
    handleFetchChange: HandleInputChange
    selectState: string;
    handleChangeSelect: HandleSelectChange;
    secondSelectState: string;
    selectHandler: HandleSelectChange;
    rate: NumStr;
}