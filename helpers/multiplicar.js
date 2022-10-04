const fs = require('fs')

const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) => {

try {
let tabla = ''
let tablaArchivo = ''

for( let i = 1 ; i <= hasta ; i++) {
    tabla += (`${base.toString().magenta} x ${i.toString().green} : ${(base*i).toString().rainbow}\n`);
    tablaArchivo += `${base} X ${i} : ${(base*i)} \n `
}
if (listar) {
    console.log('----------------------------------------');
    console.log('Tabla del'.rainbow , base);
    console.log('----------------------------------------');

    console.log(tabla);
}

const nombreArchivo = `tabla-${base}.txt`

fs.writeFile(`./tablas/${nombreArchivo}`, tablaArchivo, (err)=>{
    if(err) throw err
})
return nombreArchivo    

} catch (error) {
    throw error
}
}

module.exports = {
    crearArchivo,
}
