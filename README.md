## json-csv-str-convert

A Nodejs module that help to convert JSON object to CSV string and vice versa.

## To-DO

This module is not published to npm registry yet.

## Usage

```javascript
//import module
var converter = require('json-csv-str-convert')
//Json2Csv
convert.Json2Csv()
//Csv2Json
convert.Csv2Json()
//default Separator is ',', you can change the separator
convert.setSeparator(';').Json2Csv()
```

## Example

```
cd ./example
npm install
npm start
```