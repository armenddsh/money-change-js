
// Init 
const banknoteSupported = [0.01, 0.02, 0.05, 0.1, 0.2, 0.4, 0.5, 1, 2, 5, 10, 20, 50, 100, 200, 500];

// Input values
const cost = 10.35;
const moneyGiven = 12.35;

/**
 * 
 * @param {*} cost 
 * @param {*} moneyGiven 
 * @param {*} banknoteSupported 
 * @returns bank notes in dictionary
 */
function calculate(cost, moneyGiven, banknoteSupported) {
    const moneyReturn = moneyGiven - cost;
    let money = moneyReturn;

    const notes = {};
    for (const note of banknoteSupported) {
        notes[note] = 0;
    }

    while (money !== 0) {

        for (let index = banknoteSupported.length - 1; index >= 0; index--) {
            const note = banknoteSupported[index];
            if (money >= note) {
                money = parseFloat(parseFloat(money - note).toFixed(2));
                notes[note] += 1;
                break;
            }
        }
    }

    return notes;
}

const moneyReturned = calculate(cost, moneyGiven, banknoteSupported);

// Test

let sum = 0;
for (const key in moneyReturned) {
    if (Object.hasOwnProperty.call(moneyReturned, key)) {
        const money = moneyReturned[key];
        if (money > 0) {
            const sumRow = parseFloat(key) * parseFloat(money);
            sum += sumRow;
            console.log(`${key} x ${money} = ${sumRow}` );
        }
    }
}
console.log("---------------------");
console.log("Sum: ", sum);