const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
let result = '';
names.forEach((name, i) => {
    result += `'${name}'`;
    if (i < names.length - 1) {
        result += ', ';
    }
});
// Risultato: 'Edoardo', 'Simone', 'Francesco'
console.log(result);
