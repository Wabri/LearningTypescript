interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person:Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Gabriele", lastName: "Puliti"}

document.body.innerHTML = greeter(user);
