class Person{
/* Tambien podemos evitar esto utilizando directo en el constructor
   public name:string;
   public address: string; */


/* Ya no de esta forma 
   constructor(name: string, address: string){
    this.name = name;
    this.address = address;
   };*/

 /* De esta nos ahorramos lineas de codigo */

 constructor(
    public name: string,
    public address: string = 'No address',
 ){};
  


}

class Hero {

    constructor(
        public alterEgo:string,
        public age: number,
        public realName:string,
        public person: Person,
    ){}

}



const person = new Person('Charlie', 'New York')
const ironman = new Hero('Ironman',15, 'Tony',person);

console.log(ironman)

export{

}