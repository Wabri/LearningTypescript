# LearningTypescript
******
***Commenti:*** *Ho trattato la maggior parte degli argomenti ma non tutti. Gli argomenti non trattati sono segnati come commenti al codice markdown e li ho inseriti tra linee separatrici come queste sotto:*
  ******
  <!-- commento -->
  ******

**Cosigli prima di iniziare:**
  1. Non prendere gli appunti come perfetti, c'è una possibilità molto alta di trovare errori.
  2. Quando trovate questo [:point_up:](#indice) simbolo cliccandolo tornerete all'indice

*****
## Indice
1. [Introduzione](#introduzione)
2. [Installazione](#installazione)
3. [Esempio](#primo-file-typescript)
4. [Tipi](#spiegazione-dei-tipi)
5. [Tuple](#tuple)
6. [Enumerazioni](#enumerazioni)
7. [Any e Void](#any-e-void)
8. [Interfacce](#interfacce)
9. [Classi](#classi)

[:point_up:](#indice)

## Introduzione
TypeScript permette di non soffrire dal passaggio da linguaggi di programmazione orientati agli oggetti a JavaScript in cui sono assenti i tipi. JavaScript è un linguaggio tipizzato che non prevede controlli statici sui tipi di dato effettuando una conversione implicita tra i tipi, questa particolarità lo rende enormemente flessibile il problema arriva quando si generano errori che difficilmente sono analizzabili a runtime. Un'applicazione TypeScript viene tradotta da un compilatore in un'applicazione JavaScript eseguibile da qualsiasi engine. (Ci sono alcuni siti che forniscono degli ambienti online che traducono interattivamente il codice TypeScript in codice JavaScript, vedi [typescriptlang](http://www.typescriptlang.org/play/)).

TypeScript è di per se un'estensione di JavaScript e qualsiasi script JavaScript è anche codice TypeScript valido. Il primo vantaggio è offerto dal fatto che la transizione da un progetto JavaScript esistente a TypeScript può essere fatto gradualmente, senza la necessità di riscrivere tutto. Il secondo vantaggio è rappresentato dalla possibilità di sfruttare il compilatore TypeScript su codice JavaScript standard per individuare già in fase di compilazione errori che normalmente possono sfuggire.

[:point_up:](#indice)

## Installazione

Ci sono 2 metodi per installare TypeScript:
  - con npm
  - con plugin di visual studio

Installiamo con npm:
```
$ npm install -g typescript
```

[:point_up:](#indice)

## Primo file TypeScript
creiamo un file chiamato greeter.ts con questo contenuto:
```TS
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
```JS
function greeter(person:string) {
  return "Hello, " + person;
}

let user = "Gabriele Puliti";

document.body.innerHtml = greeter(user);
```
Compiliamo nuovamente e otteremo il solito file javascript in output. Nel file typescript abbiamo però un'informazione in più cioè il tipo del parametro, cosa che in javascript non è possibile fare se non usando i commenti al codice.

[:point_up:](#indice)

## Spiegazione dei tipi
I tipi in TypeScript sono leggere e sono un modo per sapere e ricordarsi a cosa serve o qual'è l'intento di una funzione o di una variabile. Risulta quindi più leggibile se vogliamo passare da linguaggi di programmazione a oggetti come java.
Nel nostro esempio il nostro intento è quello di chiamare la funzione *greeter* con un singolo parametro di tipo stringa. Possiamo modificare ancora il nostro esempio passando un array invece che una stringa:
```TS
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

[:point_up:](#indice)

## Tuple
Un nuovo tipo di dato introdotto da TypeScript è rappresentato dalle *tuple*, che permette di definire array con elementi diversi tra loro e di fissare il tipo di un numero di elementi definendo uno schema preciso:
```TS
  var persona : [string, number] = ["Gabriele", 25];
```
Le tuple non hanno dimensione fissa quindi è possibile aggiungere nuovi elementi all'array, es:
```TS
  persona[3] = "Puliti";
  persona[5] = 1992;
```
L'unica restrizione è che non siano introdotti nella tupla nuovi elementi di tipi diversi, es:
```TS
  persona[4] = true;
```
Questo darà errore.

[:point_up:](#indice)

## Enumerazioni
******
<!-- da fare : [enumerazioni](http://www.html.it/pag/55692/tipi-di-dato-in-typescript/) -->
******

[:point_up:](#indice)

## Any e Void
Questi due tipi di dato servono per congiungere la tipizzazione dinamica di JavaScript, infatti avremo che:
  - Una variabile di tipo **any** potrà contenere qualsiasi tipo di dato:
```TS
  var myVar: any = 123; 
  myVar = "Una stringa"; 
  myVar = true;
  var myArray: any[] = ["stringa", 123, true];
  var myVar: any = new Persona(); 
```
  - un tipo di dato **void** indica l'assenza di un valore ed è normalmente usato per indicare che una funzione non restituisce alcun valore, quindi ha lo stesso significato degli altri linguaggi di programmazione.

[:point_up:](#indice)

## Interfacce
In un linguaggio che si rispetta è necessario avere un modo per definire delle interfacce, modifichiamo quindi il nostro esempio aggiungendo un'interfaccia e adeguiamo il codice a questa modifica:
```TS
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
```JS
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Gabriele", lastName: "Puliti" };
document.body.innerHTML = greeter(user);
```
Se nell'interfaccia alcune proprietà non sono necessarie è possible inserire un punto interrogativo accanto al nome della proprietà per indicare il fatto che quella proprietà è opzionale, es:
```TS
  interface Person {
    firstName: string;
    lastName: string;
    age?: number;
  }
```
Usando le interfacce è possibile definire i così detti Dizionari, es:
```TS
interface Dizionario {
  [index: string] : string
}
var x : Dizionario;
x["chiave1"] = "valore1";
x["chiave2"] = "valore2";
```
[:point_up:](#indice)

## Classi
Dato che TypeScript è class-based object-oriented significa che esistono le classi. Estendiamo il nostro esempio creando la classe student con un costruttore e alcuni campi pubblici:
```TS
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
```JS
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
Se non diversamente specificato le proprietà di una classe sono con visibilità pubblica, cioè accessibile da codice esterno alla classe. Per settare un metodo o variabile privata è necessario indicare esplicitamente prima della dichiarazione con **private**, es:
```TS
  class Persona {
     private nome: string;
     cognome: string;
     
     private visualizzaNome () {
          return this.nome;
     }
  }
```
Ogni tentativo di usare il metodo a partire da un'istanza della classe genererà un errore del compilatore. Per vedere il risultato del nostro esempio sotto forma di pagina web andiamo a creare la pagina greeter.html con il seguente codice:
```HTML
<!DOCKTYPE html>
<html>
  <head><title>TypeScript Greeter</title></head>
  <body>
    <script src="greeter.js"></script>
  </body>
</html>
```
Aprendo la pagina web il risultato sarà semplicemente la stampa di "Hello, Gabriele Puliti".

[:point_up:](#indice)

*****
<!--
  da fare : 
    - [getters&setters](http://www.html.it/pag/55871/accesso-alle-proprieta-della-classe/)
    - [Ereditarietà](http://www.html.it/pag/55927/ereditarieta-in-typescript/)
    - [InterfacceDiClassi](http://www.html.it/pag/56000/classi-ed-interfacce/)
    - [mixins](http://www.html.it/pag/56069/mixins-in-typescript/)
    - [TipizzazioneDiFunzioni](http://www.html.it/pag/56112/funzioni-e-tipizzazione/)
    - [OverloadingDiFunzioni](http://www.html.it/pag/56431/overloading-delle-funzioni/)
    - [Namespace](http://www.html.it/pag/56769/namespace/)
    - [Moduli](http://www.html.it/pag/56961/moduli-in-typescript/)
-->
*****

[:point_up:](#indice)
