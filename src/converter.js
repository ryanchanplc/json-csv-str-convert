class Converter {
  constructor() {
    this.newline = '\n'
    this.spearator = ','
  }

  setSpearator(spearator) {
    this.spearator = spearator
    return this
  }

  Csv2Json(csv) {
    if (csv == null) return null
    if (csv.length == 0) return []

    var lines = csv.split(this.newline)
    var header = lines.shift()
    var keys = header.split(this.spearator)
    var self = this

    return lines.map(function(line) {
      var object = {}
      var records = line.split(self.spearator)
      for (var i = 0; i < keys.length; i++) {
        object[keys[i]] = records[i]
      }
      return object
    })
  }

  Json2Csv(json) {
    if (json == null) return null
    if (json.length == 0) return ''

    var self = this
    var csvArray = []

    csvArray.push(Object.keys(json[0]).join(self.spearator))

    json.map(element =>
      csvArray.push(
        Object.keys(element)
          .map(key => element[key])
          .join(self.spearator)
      )
    )

    return csvArray.join(self.newline)
  }
}

module.exports = new Converter()
