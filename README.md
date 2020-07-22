## json-csv-str-convert

A Nodejs module that help to convert JSON object to CSV string and vice versa.

## Installation

Install with npm

```
npm install json-csv-str-convert
```

and in your code

```javascript
var converter = require('json-csv-str-convert')
```

## Usage

```javascript
//import module
var converter = require('json-csv-str-convert')
//Json2Csv
var csvStr = convert.Json2Csv(your-json-object)
//Csv2Json
var jsonObject = convert.Csv2Json("your csv string")
//default Separator is ',', you can change the separator
csvStr = convert.setSeparator(';').Json2Csv(your-json-object)
```

## Example

```
cd ./example
npm install
npm start
```
