
// Esto es un Arreglo
const skiells : string[]= ['Bash', 'Counter', ',Healing']



// Esto es una interface

interface Character {
    name: string;
    hp: number;
    skiells: string[];
    hometown ?: string;    // Se puede agregar "?" para que interprete que es opcional
}


// Esto es un Objeto
const strider: Character= {

    name: 'Strider',
    hp: 100,
    skiells: ['Bash', 'Counter', 'Healing']
}


//Podemos asiganar un valor al atributo indefinido
strider.hometown = 'Rivendell';


console.table(strider);







export {};