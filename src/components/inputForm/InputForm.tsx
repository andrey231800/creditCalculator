import React, { FC } from 'react';
import './inputForm.scss';
import InputSum from './inputSum/InputSum';
import InputSelect from './inputSelect/InputSelect';
import InputProcents from './inputProcents/InputProcents';
import { IUser } from '../../types/form';
import { OptionOne, OptionTwo } from './inputSelect/Options';
// import { FetchArray } from '../../App';


const InputForm: FC<IUser> = ({
    input,
    handleChange,
    handleFetchChange, 
    selectState,
    handleChangeSelect, 
    secondSelectState, 
    selectHandler,
    rate}) => {

    return (
        <div className='inputsWrapper'>
            <div className='inputsWrapper_div'>
                <InputSum input={input} handleChange={handleChange} />
                <InputSelect selectState={selectState} handleChangeSelect={handleChangeSelect}>
                            <OptionOne/>
                </InputSelect>
            </div>
            <div className='inputsWrapper_div'>
                <InputSelect selectState={secondSelectState} handleChangeSelect={selectHandler}>
                            <OptionTwo/>
                </InputSelect>
                <InputProcents fetchingData={rate} handleFetchChange={handleFetchChange}/>
            </div>
        </div>
    )
};

export default InputForm;