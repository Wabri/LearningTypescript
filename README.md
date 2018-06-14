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
