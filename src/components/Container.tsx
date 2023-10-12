import { useState } from 'react';
import '../styles/button.css';
import '../styles/container.css';
import Button from './Button';
import Screen from './Screen';

const Container = () => {
    const [equation, setEquation] = useState('');
    const [value, setValue] = useState('0');
    const [operator, setOperator] = useState('');
    const [last, setLast] = useState('');

    const numHandler = (e: React.MouseEvent) => {
        e.preventDefault();

        let val: string = value + (e.target as HTMLButtonElement)?.value;

        if (value !== '0') {
            setValue(val);
        } else {
            setValue((e.target as HTMLButtonElement)?.value);
        }

        equation !== '' ? setEquation(equation + ' ' + val) : val = '0';

        setLast('number');
    };

    const opHandler = (e: React.MouseEvent) => {
        e.preventDefault();

        setOperator((e.target as HTMLButtonElement)?.value || '');

        console.log(operator);

        equation === ''
            ? setEquation(value + ' ' + operator)
            : setEquation(equation + ' ' + operator + ' ' + value);

        setLast('operator');
    };

    const clearHandler = (e: React.MouseEvent) => {
        e.preventDefault();

        setValue('0');
        setEquation('');
        setLast('');
    };

    const pointHandler = (e: React.MouseEvent) => {
        e.preventDefault();

        setValue(value + '.');
    };

    const eqHandler = (e: React.MouseEvent) => {
        e.preventDefault();

        setValue(eval(equation));
        setLast('=');
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
                    onClick={opHandler}
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
