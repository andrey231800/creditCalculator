import React, { FC } from 'react';
import { IActive } from '../../../types/modal';
import './modal.scss'

const Modal: FC<IActive> = ({active, setActive, children}) => {
    return (
            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)} >
                <div 
                    className={active ? "modal__content active" : "modal__content"}
                    onClick={e => {
                        e.stopPropagation()
                    }}
                >
                    <button 
                        className='modal__content-btn' 
                        style={{height: '20px'}}
                        onClick={e =>{
                            e.preventDefault();
                            setActive(false);
                        } }
                    >
                        &times;
                    </button>
                    {children}
                </div>
            </div>
    );
};

export default Modal;