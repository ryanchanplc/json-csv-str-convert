var converter = require('../src/converter')
var assert = require('assert')

var expectedCSVTitle = 'firstname,lastname,email,gender'

var expectedCSV =
  'firstname,lastname,email,gender\nRyan,Chan,ryanchanplc@gmail.com,Male\nTaiMan,Chan,chantaiman@abc.com,Male'

var expectedJson = [
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

describe('converter testing', function() {
  it('should convert json to csv', function() {
    var csv = converter.Json2Csv(expectedJson)
    assert.equal(csv, expectedCSV)
  })

  it('should convert csv to json', function() {
    var json = converter.Csv2Json(expectedCSV)
    assert.deepEqual(json, expectedJson)
  })
  it('should return empty on empty csv', function() {
    var json = converter.Csv2Json('')
    assert.deepEqual(json, [])
  })
  it('should return empty on empty json', function() {
    var csv = converter.Json2Csv([])
    assert.equal(csv, '')
  })

  it('should return empty on header only csv', function() {
    var json = converter.Csv2Json(expectedCSVTitle)
    assert.deepEqual(json, [])
  })

  it('should return null on null json', function() {
    var csv = converter.Json2Csv(null)
    assert.equal(csv, null)
  })

  it('should return null on null csv', function() {
    var json = converter.Csv2Json(null)
    assert.deepEqual(json, null)
  })
})
