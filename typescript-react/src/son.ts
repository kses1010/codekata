// 반공변
type Logger<T> = (param: T) => void;

let log: Logger<string | number> = (param) => {
    console.log(param);
};

let logNumber: Logger<number> = (param) => {
    console.log(param);
};

log = logNumber; // Error
logNumber = log; // OK

// 공변
let array: Array<string | number> = [];
let stringArray: Array<string> = [];

array = stringArray; // OK
stringArray = array; // Error
