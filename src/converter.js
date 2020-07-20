class Converter {
  constructor() {
    this.newline = '\n'
    this.separator = ','
  }

  setSeparator(separator) {
    this.separator = separator
    return this
  }

  Csv2Json(csv) {
    if (csv == null) return null
    if (csv.length == 0) return []

    var lines = csv.split(this.newline)
    var header = lines.shift()
    var keys = header.split(this.separator)
    var self = this

    return lines.map(function(line) {
      var object = {}
      var records = line.split(self.separator)
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

    csvArray.push(Object.keys(json[0]).join(self.separator))

    json.map(element =>
      csvArray.push(
        Object.keys(element)
          .map(key => element[key])
          .join(self.separator)
      )
    )

    return csvArray.join(self.newline)
  }
}

module.exports = new Converter()
