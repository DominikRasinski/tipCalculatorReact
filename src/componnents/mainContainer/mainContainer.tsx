import React, { Children } from 'react';
import css from './mainContainer.module.css';


interface mainContainerProps {
    children?: React.ReactNode,
}

export const MainContainer = (props: mainContainerProps) => {

    return (
        <div className={`${css.mainBase}`}>
            <div>
                <p className='text-very-dark-cyan text-[24px]'>SPLITER</p>
                {props.children ? props.children : null}
            </div>
        </div>
    )
}