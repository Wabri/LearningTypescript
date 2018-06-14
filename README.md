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

  let user = "Jane User";

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

let user = "Jane User";

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
