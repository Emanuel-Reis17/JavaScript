const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [ten, twenty, thridy, fourty, ...rest] = numbers;
console.log(ten, twenty, thridy, fourty);
console.log(rest);

const [first, , thrid, , fifth] = numbers;
console.log(first, thrid, fifth);

const lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [list1, list2, list3] = lists;
console.log(list2[1]);