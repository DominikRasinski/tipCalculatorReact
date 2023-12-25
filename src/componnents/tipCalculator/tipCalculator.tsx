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

    let total = 0;
    let [tip, setTip] = React.useState(0);
    const [bill, setBill] = React.useState(0);
    const [people, setPeople] = React.useState(0);
    const [input, setInput] = React.useState(0);

    const handleInput = (event: any) => {
        setInput(event.target.value)
    }
    const handleBill = (event: any) => {
        setBill(event.target.value)
    }
    const handlePeople = (event: any) => {
        setPeople(event.targer.value)
    }

    if(input !== 0) {
        tip = input;
    }

    if (tip !== 0 && bill !== 0 && people !== 0) {
        let sum = (bill * tip / 100);
        total = sum / people;
    }

    console.log(bill);
    console.log(people);

    return (
        <div className={`${css.leftContainer}`}>
            <p>Bill</p>
            <input className={`${css.inputBase}`} type="text" name="" id="" value={bill} onInput={handleBill} />
            <p>Select Tip %</p>
            <div className='flex flex-row justify-between flex-wrap'>
                <button className={`${css.buttons} ${css.buttonsBase}`} onClick={() => setTip(5)}>5%</button>
                <button className={`${css.buttons} ${css.buttonsBase}`} onClick={() => setTip(10)}>10%</button>
                <button className={`${css.buttons} ${css.buttonsBase}`} onClick={() => setTip(15)}>15%</button>
                <button className={`${css.buttons} ${css.buttonsBase}`} onClick={() => setTip(25)}>25%</button>
                <button className={`${css.buttons} ${css.buttonsBase}`} onClick={() => setTip(50)}>50%</button>
                <input type="text" name="" id="" className={`${css.btnCustom} ${css.buttonsBase}`} value={input} onInput={handleInput}/>
            </div>
            <p>Number of People</p>
            <input className={`${css.inputBase}`} type="text" name="" id="" value={people} onInput={handlePeople} />
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
            <div className='flex justify-center align-middle w-full'>
                <button className={`${css.btnReset}`} type="reset">reset</button>
            </div>
        </div>
    )
}