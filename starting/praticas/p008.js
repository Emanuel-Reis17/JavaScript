let num = [9, 7, 5, 3]
let c = 0
num.push(1)
num.sort()
while (c < num.length) {
    console.log(num[c])
    c++
}

do {
    console.log(`${num[c]}`)
    c++
} while (c < num.length)

for (let pos = 0; pos < num.length; pos++){
    console.log(`${num[pos]}`)
}

for (let pos in num) {
    console.log(`${num[pos]}`)
}

console.log(`O número 5 está na posição ${num.indexOf(5)}`)
console.log(`O vetor 'num' possui ${num.length} valores`)