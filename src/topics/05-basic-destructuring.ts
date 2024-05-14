
interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    detail: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer : AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    detail: {
        author: "Ed Sheeran",
        year: 2015,
    }
}
// Desestructuración 
const {song: anotherSong, detail } = audioPlayer;

//Primero desestructure del detail y luego en otras contratante obtube solo lo que queria
const{author} = detail;

//console.log('Song:', anotherSong);

//console.log('author:', author);

//Desustucturacion de Arreglos

const [p1,p2,trunk = 'Not found']: string[] = ['Goku', 'Vegeta','Trunk'];

console.log('Personaje 3:', trunk);


export{};