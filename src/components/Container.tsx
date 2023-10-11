import '../styles/button.css';
import '../styles/container.css';
import React from 'react';
import Button from './Button';
import Display from './Display';

const Container = () => {
    return (
        <div id="container">
            <Display />
            <div className="row">
                <Button label="C" purpose="operator"></Button>
                <Button label="+/-" purpose="operator"></Button>
                <Button label="%" purpose="operator"></Button>
                <Button label="/" purpose="operator"></Button>
            </div>
            <div className="row">
                <Button label="7" purpose="number"></Button>
                <Button label="8" purpose="number"></Button>
                <Button label="9" purpose="number"></Button>
                <Button label="x" purpose="operator"></Button>
            </div>
            <div className="row">
                <Button label="4" purpose="number"></Button>
                <Button label="5" purpose="number"></Button>
                <Button label="6" purpose="number"></Button>
                <Button label="-" purpose="operator"></Button>
            </div>
            <div className="row">
                <Button label="1" purpose="number"></Button>
                <Button label="2" purpose="number"></Button>
                <Button label="3" purpose="number"></Button>
                <Button label="+" purpose="operator"></Button>
            </div>
            <div className="row">
                <Button label="0" purpose="number"></Button>
                <Button label="." purpose="number"></Button>
                <Button label="=" purpose="equal"></Button>
            </div>
        </div>
    );
};

export default Container;
