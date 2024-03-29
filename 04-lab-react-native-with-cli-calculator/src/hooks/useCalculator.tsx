import { useRef, useState } from "react";

enum Operator {
    add,
    subtract,
    multiply,
    divide,
}

export const useCalculator = () => {
    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');
    const lastOperation = useRef<Operator>();

    const clean = () => {
        setNumber('0');
        setPrevNumber('0');
    };

    const deleteOperation = () => {
        let currentSign = ' ';
        let temporalNumber = number;
        if (number.includes('-')) {
            currentSign = '-';
            temporalNumber = number.substring(1);
        }
        if (temporalNumber.length > 1) {
            setNumber(currentSign + temporalNumber.slice(0, -1));
        } else {
            setNumber('0');
        }
    };

    const toggleSign = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''));
        } else {
            setNumber('-' + number);
        }
    };

    const buildNumber = (numberString: string) => {
        if (number.includes('.') && numberString === '.') {
            return;
        }
        if (number.startsWith('0') || number.startsWith('-0')) {
            // Punto decimal
            if (numberString === '.') {
                setNumber(number + numberString);
                return;
            }
            // Evitar 000000
            if (numberString === '0' && !number.includes('.')) {
                return;
            }
            // Evaluar si es diferente de cero, no hay punto, y si es el primer número.
            if (numberString !== '0' && !number.includes('.')) {
                setNumber(numberString);
                return;
            }
            // Evaluar si es otro cero y no hay punto.
            if (numberString === '0' && number.includes('.')) {
                setNumber(number + numberString);
                return;
            }
            setNumber(number + numberString);
        } else {
            setNumber(number + numberString);
        }
    };

    const setLastNumber = () => {
        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1));
        } else {
            setPrevNumber(number);
        }
    };

    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    };

    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply;
    };

    const subtractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.subtract;
    };

    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    };

    return {
        number,
        prevNumber,
        setLastNumber,
        buildNumber,
        toggleSign,
        clean,
        deleteOperation,
        divideOperation,
        multiplyOperation,
        subtractOperation,
        addOperation,
    };
};
