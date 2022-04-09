import React, { FC } from 'react';
import { IFetch } from '../../../types/form';


const InputProcents: FC<IFetch> = ({fetchingData, handleFetchChange}) => {


    return (
        <>
            <div className={fetchingData ? 'input__calc' : 'input__calc red'}>
                    <span>Процентная ставка, % годовых</span>
                    <input 
                        type="text" 
                        onChange={handleFetchChange} 
                        value={fetchingData}
                    />
            </div>
            {fetchingData ? null : <div className='validation'>Введите проценты!</div>}
        </>
            
    );
};

export default InputProcents;