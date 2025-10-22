const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

people.forEach(person =>{
console.log(person.name);
  
})


//Se volessi invece ottenere un array contenente i nomi delle persone, allora :

const array_nomi = people.map(person => person.name)
console.log(array_nomi)

