function exampleFunction(arg) {
    if (typeof arg !== 'undefined') {
        console.log('Аргумент передан:', arg);
    } else {
        console.log('Аргумент не передан.');
    }
}

exampleFunction(); // Output: "Аргумент не передан."
exampleFunction('test'); // Output: "Аргумент передан: test"
