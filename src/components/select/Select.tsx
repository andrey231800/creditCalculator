import React, { FC } from 'react';
import './select.scss'

const Select: FC = () => {

    const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
       console.log(e.target)
    }

    return (
        <div className='select is-active'>
            <div className="select__header">
                <span className="select__header-current">value 1</span>
                <div className='select__header-icon'>&times;</div>
            </div>
            <div className="select__body " onClick={handleClick}>
                <div className="select__body-item">value 1</div>
                <div className="select__body-item">value 2</div>
                <div className="select__body-item">value 3</div>
                <div className="select__body-item">value 4</div>
                <div className="select__body-item">value 5</div>
            </div>
        </div>
    );
};

export default Select;