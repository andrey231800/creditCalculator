import React, { FC } from 'react';
import { ISelect } from '../../../types/form';



const InputSelect: FC<ISelect> = ({
        selectState, 
        handleChangeSelect, 
        children
    }) => {
    return (
        <div className='input__calc'>
                <span>Срок кредита:</span>
                <select name="select" id="" value={selectState} onChange={handleChangeSelect}>
                    {children}
                </select>
        </div>
    );
};

export default InputSelect;