const getAge = ((dateOfBirth) => {
    const birthday = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear() - 1;
    if (today.getMonth() > birthday.getMonth()){
        age ++;
    }
    if (today.getMonth() === birthday.getMonth() && today.getDate() >= birthday.getDate()) {
        age++;
    }
    return age;
})


console.log(getAge('1990-01-01 16:27:00'));
console.log(getAge('1995-02-11 15:27:00'));
    // Print: 32



function getChildren(persons) {    
    return persons.filter(person => person.age < 20);
}

const allPersons = [
    { name: "John Kim", age: 10 },
    { name: "Jane Doe", age: 20 },
    { name: "Fred Kang", age: 13 },
    { name: "Chris Doe", age: 39 },
    { name: "Layla Park", age: 19 },
];

console.log(getChildren(allPersons));
    // Print: [
    // 	{"name": "John Kim", "age": 10},
    // 	{"name": "Fred Kang", "age": 13},
    //  {"name": "Layla Park", "age": 19},
    // ]