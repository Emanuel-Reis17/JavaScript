const student = {
    firstName: "Emanuel",
    get getName(){
        return this.firstName;
    }, 
    set changeName(newName){
        this.firstName = newName;
    }
}

console.log(student.getName);

student.changeName = "Adrian";

console.log(student.firstName);