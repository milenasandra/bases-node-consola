require('colors')
const { crearArchivo } = require('./helpers/multiplicar')
 const argv = require('./helpers/yargs')

console.clear()

crearArchivo(argv.b, argv.l, argv.h).then((nombreArchivo) => 
    console.log(`Se ha creado el archivo ${nombreArchivo.red}`)
).catch((error) => console.log(error))