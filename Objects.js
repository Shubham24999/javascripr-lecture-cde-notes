const person = {
    name: "Deepak",
    age: 22,
    isEmployed: true,
    address: {
        city: "Maharajganj",
        country: "INDIA"
    },
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
person.greet();  // Output: Hello, my name is Deepak 

// Accessing object properties
// console.log(person.name);  // Output: Deepak

// console.log(person["name"]); 
// console.log(person.address.country);  // Output: Maharajganj
// console.log(person["address"]["country"]);

const students = [
    { name: "Alice", age: 22, course: "Computer Science" },
    { name: "Bob", age: 24, course: "Mechanical Engineering" },
    { name: "Charlie", age: 23, course: "Electrical Engineering" }
];

// Accessing elements
console.log(students[0].name);  // Output: Alice
