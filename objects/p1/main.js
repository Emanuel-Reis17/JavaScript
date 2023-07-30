const person = {
    name: 'Emanuel',
    age: 18, 
    jobs: ["Programmer", "Designer", "PLR"], 

    // accessing name property by using this.name
    greet: function() { console.log('The name is' + ' ' + this.name); }
};

person.greet();