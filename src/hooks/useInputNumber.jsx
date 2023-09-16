import { useState } from "react";

const useInputNumber = (initialValue = 0) => {
    const [number, setNumber] = useState(0);

    const setValue = (e) => {
        const value = Number(e);
        const isInteger = Number.isInteger(value);
        const isPositive = value > 0;

        if (isInteger && isPositive) {
            number > 99 ? setNumber(99) : setNumber(e);
        } else {
            setNumber(initialValue);
        }
    };

    return [number, setValue];
};

export default useInputNumber;
