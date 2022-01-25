let users = [
  { firstName: "Anand", lastName: "Raj", marks:12 },
  { firstName: "Rahul", lastName: "Singh" , marks:15},
  { firstName: "Sumit", lastName: "Choudhary" , marks:23},
];

let newMappedusers = users.map((user) => user.firstName)
console.log(newMappedusers);

let newFilteredUsers = users.filter((user) => user.marks > 15);
console.log(newFilteredUsers)


