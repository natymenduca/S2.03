
(flotante,pasta,metalica)
db.createCollection( 'gafas', {validator: {$jsonSchema: {bsonType: 'object',title:'gafas',required: [         'marca',          'color montura',          'tipoMontura',          'precio',          'graduacion',          'proveedores'],properties: {marca: {bsonType: 'string'},color montura: {bsonType: 'string'},tipoMontura: {enum: (flotante, pasta, metalica)},precio: {bsonType: 'decimal'},graduacion: {bsonType: 'array',items: {
title:'object',required: [         'ojo derecho',          'ojo izquierdo',          '_idGraduacion'],properties: {ojo derecho: {bsonType: 'bool'},ojo izquierdo: {bsonType: 'bool'},_idGraduacion: {bsonType: 'int'}}}},colorVidrio: {bsonType: 'array',items: {
title:'object',required: [         'ojo izquierdo',          'ojo derecho',          '_idColorVidrio'],properties: {ojo izquierdo: {bsonType: 'string'},ojo derecho: {bsonType: 'string'},_idColorVidrio: {bsonType: 'int'}}}},proveedores: {bsonType: 'objectId'}},
patternProperties: {"marcas": {bsonType: 'array',items: {
title:'object',required: [         'nombre',          'id_marcas'],properties: {nombre: {bsonType: 'string'},id_marcas: {bsonType: 'int'}}}}}         }      },
autoIndexId:true
});  