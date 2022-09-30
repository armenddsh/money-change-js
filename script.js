
// Init 
const banknoteSupported = [0.1, 0.2, 0.4, 1, 2, 5, 10, 20, 50, 100, 200, 500];


const cost = 10.35;
const moneyGiven = 20;

function calculate(cost, moneyGiven, banknoteSupported) {
    const moneyReturn = moneyGiven - cost;
    const money = 0;

    const notes = {};
    for (const note of banknoteSupported) {
        notes[note] = 0;
    }

    while (money !== moneyReturn) {

        for (let index = banknoteSupported.length; index > 0; index--) {
            const note = banknoteSupported[index];
            if (moneyReturn > note) {
                money += note;
                notes[note] += 1;
            }
        }
    }

    return notes;
}

const result = calculate(cost, moneyGiven, banknoteSupported);

console.log(result);