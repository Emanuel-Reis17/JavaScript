const person = {
    name: 'Emanuel',
    age: 18,
    jobs: ["Programmer", "Designer", "PLR"],

    // accessing name property using this.name
    greet: function () {
        console.log('My name is' + ' ' + this.name);
    }
};

person.greet();