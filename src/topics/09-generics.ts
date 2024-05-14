//Para hacer una función generica se utiliza <T>
function whatsMyType<T>(argument: T) :T{
     return argument;
}


const amIString = whatsMyType<string>('Hi hi');
const amINUmber = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIString);
console.log(amINUmber);
console.log(amIArray);

export{

}