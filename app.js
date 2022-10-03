 const { crearArchivo } = require('./helpers/multiplicar')
 const colors = require('colors')

 const base = 5
 console.clear()



crearArchivo(base).then((nombreArchivo) => 
    console.log(`Se ha creado el archivo ${nombreArchivo.rainbow}`)
).catch((error) => console.log(error))