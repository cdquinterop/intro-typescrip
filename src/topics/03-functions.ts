

//Funcion Basica en TypeScrip
function addNumbers(a: number,b:number){

    return a + b;

}

//Funciones flechas
const addNumbersArrow = ( a: number, b:number) :string => {
     return `${a + b}`; //Permite convertir el number a string de forma actual
}

//Funcion con valores opcionales
function Multiplayer(firsnumber:number, secodnumber?:number, base:number = 2){

    return firsnumber * base;
}

/*const result: number = addNumbers(2,4);
const result2: string = addNumbersArrow(2,4);
const multiplayerResult: number = Multiplayer(2);*/

//console.log({result, result2, multiplayerResult});

//Creamos una interfas
interface Character{
    name:string;
    hp:number;
    showHp: ()  => void;  //tambien se puede definir metodos
}


//Metodo para dar mas vida
const healCharater = ( character: Character, amount:number ) => { 
    character.hp += amount;
}

//Asignamos valores al objeto
const strider: Character ={
    name: 'Strider',
    hp: 50,
    showHp: function() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

//Damos vida
healCharater(strider,10);

//Visualizamos la informacion
strider.showHp();


export {};