const programmer = {
    firstName: "Emanuel",
    set changeName(newName) {
        this.firstName = newName;
    }
}

console.log(programmer.firstName);

programmer.changeName = "Adrian";

console.log(programmer.firstName);

function Test(p_name) {
    this.username = p_name;
}

const person1 = new Test("Emanuel");

Object.defineProperty(person1, "changeName", {
    set: function (newName) {
        this.username = newName;
    }
});

person1.changeName = "Adrian";

console.log(person1);