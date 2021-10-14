// Selecionando todos os documentos da coleção
db.bios.find();                             // SELECT * FROM bios;

// Selecionando documentos com critérios de busca
db.bios.find( { _id: 5 } );                 // SELECT * FROM bios WHERE _id = 5;
db.bios.find( { "name.last": "Hopper" } )   // Com dot notacion

// Projetando somente atributos requeridos
db.bios.find( {}, { name: 1 } )             // SELECT name FROM bios;

// Limitando o numero de documentos retornados
db.bios.find().limit(5)                     // SELECT * FROM bios LIMIT 5;

// Pretty
db.bios.find().limit(5).pretty()
// db.collection.find(<query>).limit(<número>) - sintaxe

// Pulando documentos
db.bios.find().skip(2)                      // SELECT * FROM bios OFFSET 2;
db.bios.find().limit(10).skip(5)            // SELECT * FROM bios LIMIT 10 OFFSET 5;
