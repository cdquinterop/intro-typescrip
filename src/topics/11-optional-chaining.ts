
interface Passenger{
    name: string;
    children?:string[];
}

const passenger1: Passenger ={
    name :'Charlie',
}

const passenger2: Passenger = {
    name: 'Waleska',
    children: ['Darmi', 'Dahiri']
}

const printChildren = ( passenger: Passenger) =>{

    //Voy a utilizar desestructuración

    const { name, children} = passenger;

    const howManyChildren = children?.length || 0;
    console.log(name,howManyChildren);
}

printChildren(passenger2);
printChildren(passenger1);

export{

}