import * as React from 'react';
import { InputHTMLAttributes } from 'react';
import css from './tipCalculator.module.css';


interface calculatorProps extends InputHTMLAttributes<HTMLInputElement>{

}

export const MainCalculator = (props: calculatorProps) => {
    return (
        <div className={`${css.baseCalculator}`}>
            <LeftCalculatorStructure {...props} />
            <RightCalculatorStructure {...props} />
        </div>
    )
}

const LeftCalculatorStructure = (props: calculatorProps) => {

    const [tip, setTip] = React.useState(0);
    const [bill, setBill] = React.useState(props?.value ?? '');
    const [people, setPeople] = React.useState(props?.value ?? '');
    const [input, setInput] = React.useState(props?.value ?? '');

    const handleInput = (event: any) => {
        setInput(event.target.value)
    }
    const handleBill = (event: any) => {
        setBill(event.target.value)
    }
    const handlePeople = (event: any) => {
        setPeople(event.targer.value)
    }

    console.log(bill);
    console.log(people);

    return (
        <div className={`${css.leftContainer}`}>
            <p>Bill</p>
            <input type="text" name="" id="" value={bill} onInput={handleBill} />
            <p>Select Tip %</p>
            <div className='flex flex-row justify-between flex-wrap'>
                <button className={`${css.buttons}`} onClick={() => setTip(5)}>5%</button>
                <button className={`${css.buttons}`} onClick={() => setTip(10)}>10%</button>
                <button className={`${css.buttons}`} onClick={() => setTip(15)}>15%</button>
                <button className={`${css.buttons}`} onClick={() => setTip(25)}>25%</button>
                <button className={`${css.buttons}`} onClick={() => setTip(50)}>50%</button>
                <input type="text" name="" id="" className={`${css.buttons}`} value={input} onInput={handleInput}/>
            </div>
            <p>Number of People</p>
            <input type="text" name="" id="" value={people} onInput={handlePeople} />
        </div>
    )
}

const RightCalculatorStructure = (props: calculatorProps) => {
    return (
        <div className={`p-2 ${css.rightContainer}`}>
            <div>
                <p className='inline-block w-1/3'>Tip Amount</p><span>/ person</span>
                <p className='inline-block w-1/2'><span>$</span>0.00</p>
            </div>
            <div>
                <p className='inline-block w-1/3'>Total</p><span>/ person</span>
                <p className='inline-block w-1/2'><span>$</span>0.00</p>
            </div>
        </div>
    )
}