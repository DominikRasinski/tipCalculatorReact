import React from 'react';
import css from './mainContainer.module.css';


interface mainContainerProps {
    children?: React.ReactNode,
}

export const MainContainer = (props: mainContainerProps) => {

    return (
        <div className={`${css.mainBase}`}>
            <p>SPLITER</p>
        </div>
    )
}