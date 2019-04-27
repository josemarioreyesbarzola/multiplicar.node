const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Genera un archivo con la tabla de multiplica', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        console.log('listar');
        break;

    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));

        break;

    default:
        console.log('COmando no reconocido');
}


console.log(argv);


//console.log(process.argv);

//let argv2 = process.argv;

//console.log('Limite', argv.limite);


//let parametro = argv[2];
//let base = parametro.split('=')[1];


//console.log(base);


//crearArchivo(base)
//  .then(archivo => console.log(`Archivo creado: ${archivo}`))
//.catch(e => console.log(e));