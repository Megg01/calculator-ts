import { useState } from 'react';
import '../styles/button.css';
import '../styles/container.css';
import Button from './Button';
import Screen from './Screen';

const Container = () => {
    const [equation, setEquation] = useState('');
    const [value, setValue] = useState('0');
    const [last, setLast] = useState('');
    const [plusMinus, setPlusMinus] = useState('');

    const numHandler = (e: React.MouseEvent) => {
        e.preventDefault();

        const twoMoreVal: string =
            value + (e.target as HTMLButtonElement)?.value;
        const oneVal: string = (e.target as HTMLButtonElement)?.value;

        if (value === '0') {
            setValue(oneVal);
        } else {
            setValue(twoMoreVal);
        }

        if (last === 'operator') {
            setEquation(equation + ' ' + oneVal);
        } else if (equation !== '' && last === 'number') {
            setEquation(equation + oneVal);
        } if (equation !== '' && last === '.') {
            setEquation(equation + '.' + oneVal);
        }

        setLast('number');
    };

    const opHandler = (e: React.MouseEvent) => {
        e.preventDefault();

        const clickedOp = (e.target as HTMLButtonElement)?.value;

        equation === ''
            ? setEquation(value + ' ' + clickedOp)
            : setEquation(equation + ' ' + clickedOp + ' ');

        setValue('0');

        setLast('operator');
    };

    const clearHandler = (e: React.MouseEvent) => {
        e.preventDefault();

        setValue('0');
        setEquation('');
    };

    const pointHandler = (e: React.MouseEvent) => {
        e.preventDefault();

        setValue(value + '.');
        setLast('.');
    };

    const eqHandler = (e: React.MouseEvent) => {
        e.preventDefault();

        if (equation !== '') {
            setValue(eval(equation));
        } else {
            setValue('0');
        }

        setLast('=');
    };

    const plusMinusHandler = (e: React.MouseEvent) => {
        e.preventDefault();

        if (plusMinus === '' && value !== '0') {
            setValue('-' + value);
            setPlusMinus('-');
        }
        if (plusMinus === '-') {
            setValue(value.slice(1, value.length));
            setPlusMinus('');
        }
    };

    return (
        <div id="container">
            <Screen equation={equation} value={value} />
            <div className="row">
                <Button
                    label="C"
                    purpose="operator"
                    onClick={clearHandler}
                ></Button>
                <Button
                    label="+/-"
                    purpose="operator"
                    onClick={plusMinusHandler}
                ></Button>
                <Button
                    label="%"
                    purpose="operator"
                    onClick={opHandler}
                ></Button>
                <Button
                    label="/"
                    purpose="operator"
                    onClick={opHandler}
                ></Button>
            </div>
            <div className="row">
                <Button
                    label="7"
                    purpose="number"
                    onClick={numHandler}
                ></Button>
                <Button
                    label="8"
                    purpose="number"
                    onClick={numHandler}
                ></Button>
                <Button
                    label="9"
                    purpose="number"
                    onClick={numHandler}
                ></Button>
                <Button
                    label="*"
                    purpose="operator"
                    onClick={opHandler}
                ></Button>
            </div>
            <div className="row">
                <Button
                    label="4"
                    purpose="number"
                    onClick={numHandler}
                ></Button>
                <Button
                    label="5"
                    purpose="number"
                    onClick={numHandler}
                ></Button>
                <Button
                    label="6"
                    purpose="number"
                    onClick={numHandler}
                ></Button>
                <Button
                    label="-"
                    purpose="operator"
                    onClick={opHandler}
                ></Button>
            </div>
            <div className="row">
                <Button
                    label="1"
                    purpose="number"
                    onClick={numHandler}
                ></Button>
                <Button
                    label="2"
                    purpose="number"
                    onClick={numHandler}
                ></Button>
                <Button
                    label="3"
                    purpose="number"
                    onClick={numHandler}
                ></Button>
                <Button
                    label="+"
                    purpose="operator"
                    onClick={opHandler}
                ></Button>
            </div>
            <div className="row">
                <Button
                    label="0"
                    purpose="number"
                    onClick={numHandler}
                ></Button>
                <Button
                    label="."
                    purpose="number"
                    onClick={pointHandler}
                ></Button>
                <Button label="=" purpose="equal" onClick={eqHandler}></Button>
            </div>
        </div>
    );
};

export default Container;
