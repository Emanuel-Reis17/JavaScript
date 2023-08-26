function* geradora() {
    yield "randomNumber";
    yield "randomNumber";
    yield "randomNumber";
}

const g1 = geradora();
// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());

function* geradora2() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora3() {
    yield* geradora2();
    yield 3;
    yield 4;
    yield 5;
}

const g3 = geradora3();
for(let valor of g3) {
    console.log(valor);
}