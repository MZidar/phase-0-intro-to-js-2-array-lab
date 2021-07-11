const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
}

function destructivelyPrependCat(Bob) {
    cats.unshift(Bob);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(Broom) {
    const appendCat = cats.slice();
    appendCat.push(Broom);
    return appendCat
}

function prependCat(Arnold) {
    const prependCat = cats.slice();
    prependCat.unshift(Arnold);
    return prependCat;
}

function removeLastCat() {
    const newCats = cats.slice(0,2);
    return newCats
}


function removeFirstCat() {
    const newerCats = cats.slice(1,3);
    return newerCats
}
