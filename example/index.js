var converter = require('json-csv-str-convert')

var testjson = [
  {
    firstname: 'Ryan',
    lastname: 'Chan',
    email: 'ryanchanplc@gmail.com',
    gender: 'Male'
  },
  {
    firstname: 'TaiMan',
    lastname: 'Chan',
    email: 'chantaiman@abc.com',
    gender: 'Male'
  }
]

var csvStr = converter.Json2Csv(testjson)
var JsonObject = converter.Csv2Json(csvStr)

console.log(csvStr)
console.log(JsonObject)
