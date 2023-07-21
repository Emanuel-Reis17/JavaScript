const objs = [
    {
        name: "Emanuel",
        age: 18,
        isWorking: true,
        work_details: {
            job: "Programador",
            empresa: "TMonkey"
        },
        hobbies: ["Programar", "Ler", "Jogar"]
    },
    {
        name: "Melissa",
        age: 15,
        isWorking: false,
        work_details: {
            job: null,
            empresa: null
        },
        hobbies: ["Ler", "Jogar"]
    }
]

//JSON
// Object to JSON
const jsonData = JSON.stringify(objs);

console.log(jsonData);
console.log(typeof jsonData);

//JSON to Object
const objData = JSON.parse(jsonData);

console.log(objData);
console.log(typeof objData);

objData.map((person)=>{
    console.log(person.name);
});