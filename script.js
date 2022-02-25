const add = (...numbers) => {
    return numbers.reduce((total, current) => {
        return total + current;
    });
};

const subtract = (...numbers) => {
    return numbers.reduce((total, current) => {
        return total - current;
    });
};

const multiply = (...numbers) => {
    return numbers.reduce((total, current) => {
        return total * current;
    });
};

const divide = (...numbers) => {
    return numbers.reduce((total, current) => {
        return total / current;
    });
};

const operate = (num1, operator, num2) => {
    if (operator === '+'){
        return num1 + num2;
    } else if (operator === '-'){
        return num1 - num2;
    } else if (operator === '*'){
        return num1 * num2;
    }
    return num1 / num2;
}

