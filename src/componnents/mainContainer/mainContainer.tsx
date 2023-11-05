import * as React from 'react';
import { InputHTMLAttributes } from 'react';
import css from './mainContainer.module.css';


interface mainContainerProps extends InputHTMLAttributes<HTMLInputElement>{
    children?: React.ReactNode,
}

export const MainContainer = (props: mainContainerProps) => {

    return (
        <div className={`${css.mainBase}`}>
            <div>
                <p className='text-very-dark-cyan text-[24px] text-center'>SPLITER</p>
                {props.children ? props.children : null}
            </div>
        </div>
    )
}