const argv = require('yargs')
             .options({
                'b': {
                  alias: 'base',
                  demandOption: true,
                  describe: 'Base del numero a multipicar',
                  type: 'number'
                },
                'l':{
                    alias: 'listar',
                    default: false,
                    describe: 'lista informacion',
                    type: 'boolean'
                },
                'h':{
                    alias: 'hasta',
                   // demandOption: true,
                    describe: 'limite de tabla',
                    type: 'number'
                }
              })
             .check((argv,option) =>{
                 if(isNaN(argv.b)){
                     throw('la base tiene que ser un numero');
                 }
                 return true;
             })
            .argv;


module.exports = argv;