# LearningTypescript

## Installazione

Ci sono 2 metodi per installare TypeScript:
  - con npm
  - con plugin di visual studio

Installiamo con npm:
```
$ npm install -g typescript
```

## Primo file TypeScript
creiamo un file chiamato greeter.ts con questo contenuto:
```
  function greeter(person) {
    return "Hello, " + person;
  }

  let user = "Gabriele Puliti";

  document.body.innerHTML = greeter(user);
```
Notiamo che l'estensione di questo file è .ts, anche se effettivamente il codice che abbiamo scritto è in javascript, questo perchè è possibile scrivere codice javascript anche in uno script typescript. Possiamo trasformare questo file in una estensione .js semplicemente eseguendo il comando di compilazione:
```
$ tsc greeter.ts
```
Il risultato di questo comando sarà un file greeter.js che conterrà essenzialmente lo stesso codice del precendente. Andiamo ora a parlare dei miglioramenti che possiamo avere usando questo nuovo linguaggio. Aggiungiamo al codice precedente una annotazione al tipo del parametro passato alla funzione greeter:
```
function greeter(person:string) {
  return "Hello, " + person;
}

let user = "Gabriele Puliti";

document.body.innerHtml = greeter(user);
```
Compiliamo nuovamente e otteremo il solito file javascript in output. Nel file typescript abbiamo però un'informazione in più cioè il tipo del parametro, cosa che in javascript non è possibile fare se non usando i commenti al codice.

## Spiegazione dei tipi
I tipi in TypeScript sono leggere e sono un modo per sapere e ricordarsi a cosa serve o qual'è l'intento di una funzione o di una variabile. Risulta quindi più leggibile se vogliamo passare da linguaggi di programmazione a oggetti come java.
Nel nostro esempio il nostro intento è quello di chiamare la funzione *greeter* con un singolo parametro di tipo stringa. Possiamo modificare ancora il nostro esempio passando un array invece che una stringa:
```
function greeter(person: string) {
  return "Hello, " + person;
}

let user = [0,1,2];

document.body.innerHTML = greeter(user);
```
a questo punto se proviamo a ricompilare il nostro codice otterremo giustamente un errore:
```
greeter.ts:7:35 - error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.

7 document.body.innerHTML = greeter(user);
```
TypeScript ci avvertirà se il nostro codice ha delle chiamate a funzioni inaspettate o sbagliate, offre quindi un'analisi statica del codice sia da un punto di vista di struttura che dai tipi usati.
Notiamo anche che nonostante l'output su terminale abbiamo dato un risultato negativo, il file javascript viene comunque creato. Quindi possiamo usare il file javascript creato nonostante siano stati trovati errori da TypeScript.

## Interfacce e classi
In un linguaggio che si rispetta è necessario avere un modo per definire delle interfacce, modifichiamo quindi il nostro esempio aggiungendo un'interfaccia e adeguiamo il codice a questa modifica:
```
interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person:Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Gabriele", lastName: "Puliti"}

document.body.innerHTML = greeter(user);
```
compilando vediamo che nel file javascript risultante non comparirà l'interfaccia ma il codice si adatterà a quello che abbiamo creato con TypeScript:
```
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Gabriele", lastName: "Puliti" };
document.body.innerHTML = greeter(user);
```
Dato che TypeScript è class-based object-oriented significa che esistono le classi. Estendiamo il nostro esempio creando la classe student con un costruttore e alcuni campi pubblici:
```
class Student {
  fullName: string;
  constructor (public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person:Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Gabriele", "Sig.", "Puliti");

document.body.innerHTML = greeter(user);
```
Immaginiamo che con l'aggiunta di questa classe il codice javascript corrispondente sarà completamente cambiato. Effettivamente rieseguendo la compilazione del codice TypeScript otterremo il seguendo codice:
```
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Gabriele", "Sig.", "Puliti");
document.body.innerHTML = greeter(user);
```
Notiamo quindi la differenza essenziale di un codice in javascript da uno in TypeScript che è estremamente molto più leggibile.

## Run the code
Per vedere il risultato del nostro esempio sotto forma di pagina web andiamo a creare la pagina greeter.html con il seguente codice:
```
<!DOCKTYPE html>
<html>
  <head><title>TypeScript Greeter</title></head>
  <body>
    <script src="greeter.js"></script>
  </body>
</html>
```
Aprendo la pagina web il risultato sarà semplicemente la stampa di "Hello, Gabriele Puliti".
