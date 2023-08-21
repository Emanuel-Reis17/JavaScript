function Person(p_name, p_age) {
    this.name = p_name,
    this.age = p_age
};

const person1 = new Person("Emanuel", 18);
const person2 = new Person("Adrian", 19);
const person3 = new Person("Geovane", 19);

//Using Object.defineProperty to change(set) the age
Object.defineProperty(person3, "changeAge", {
    set: function (newAge) {
        this.age = newAge;
    }
});
Object.defineProperty(person2, "getName", {
    get : function () {
        return this.name;
    }
})

person3.changeAge = 23;

console.log(person3.age);
console.log(person2.getName);