function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Gabriele", lastName: "Puliti" };
document.body.innerHTML = greeter(user);
