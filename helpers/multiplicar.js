const fs = require('fs');
require('colors');
 

/*
const creararchivo = (base = 5) => {  
  return new Promise ( (resolve, reject) => {
    console.log( '============================');
    console.log(`    Tabla del ${base} `);    
    console.log( '============================');

    let salida = '';

    for (let index = 1; index < 11; index++) {
        salida += `${base} x ${index} = ${base * index} \n`;
    }
    console.log(salida);
    
    fs.writeFileSync(`tabla-${base}.txt`, salida);

    resolve(` ${base}.txt `);

  })
       
} */

const creararchivo = async (base = 5 , listar = false , hasta = 10) => {  
    try {
       
    
        let salida ='' , consola = '';
    
        for (let index = 1; index <= hasta; index++) {
            salida += `${base} x ${index} =  ${base * index} \n`;
            consola += `${base}`.blue + ` x `.bgGreen + `${index}`.blue + `=`.green +` ${base * index} \n`.underline.yellow;
        }
        if(listar){
            console.log( '============================'.red);
            console.log(`    Tabla del ${base} `.rainbow);    
            console.log( '============================'.red);
            console.log(consola);
        }
        
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return ` tabla-${base}.txt `;
    } catch (err) {
        throw error;
    }
    
     
           
  }


/* 
    fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        if (err) throw err;
        console.log(`tabla del ${base} creado`);
    }) */

    // con esta forma si sale un error toca atraparlo con u n try catc

module.exports = {
    creararchivo : creararchivo
}