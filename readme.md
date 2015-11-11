## AngularJs String Helper
[![Build Status](https://travis-ci.org/xrexonx/angular-string-helper.svg?branch=master)](https://travis-ci.org/xrexonx/angular-string-helper) [![npm version](https://badge.fury.io/js/angular-string-helper.svg)](https://badge.fury.io/js/angular-string-helper) [![Downloads](http://img.shields.io/npm/dm/angular-string-helper.svg)](https://www.npmjs.com/package/angular-string-helper)

Just a simple lightweight angularjs string helper that maybe helps and also provides filters with each functions.

## Installation

Install via bower
```sh
$ bower install angular-string-helper --save
```
or via npm

[![NPM](https://nodei.co/npm/angular-string-helper.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/angular-string-helper/)

Be sure to include `angular-string-helper.js` or `angular-string-helper.min.js` in your HTML document after including your angular.js file.

```html
<script src="js/angular-string-helper.js"></script>
```

Add `rex-string-helper` as a dependency in your AngularJS app.

```javascript
angular.module("youApp", ["rex-string-helper", "Other-Dependencies"]);
```

Inject *Str*  on your Controller or Service.

```javascript
(function () {
    'use strict';
    
    angular
        .module('appName')
        .controller('appController', function ($scope, Str) {
            //code here....
    
        });
})();
```
## API Usage

#### Str.toSlug();
```javascript
        var sampleString = "This is a sample string";
        var slug = Str.toSlug(sampleString);
        console.log(slug); //Outputs: this-is-a-sample-string
```
#### Str.toCamelCase();
```javascript
        var sampleString = "This is a sample string";
        var camelCase = Str.toCamelCase(sampleString);
        console.log(camelCase); //Outputs: thisIsASampleString
```
#### Str.toSnakeCase();
```javascript
        var sampleString = "This is a sample string";
        var snakeCase = Str.toSnakeCase(sampleString);
        console.log(snakeCase); //Outputs: this_is_a_sample_string
```
#### Str.toUpperFirstChar();
```javascript
        var sampleString = "uppercase";
        var str = Str.toUpperFirstChar(sampleString);
        console.log(str); //Outputs: Uppercase
```
#### Str.toLowerFirstChar();
```javascript
        var sampleString = "Lowercase";
        var str = Str.toLowerFirstChar(sampleString);
        console.log(str); //Outputs: lowercase
```
#### Str.toCamelCaseFromDashed();
```javascript
        var sampleString = "this-is-a-sample-string";
        var str = Str.toCamelCaseFromDashed(sampleString);
        console.log(str); //Outputs: thisIsASampleString
```
#### Str.toDashFromCamelCase();
```javascript
        var sampleString = "thisIsASampleString";
        var str = Str.toDashFromCamelCase(sampleString);
        console.log(str); //Outputs: this-is-a-sample-string
```
#### Str.toSnakeCaseFromCamelCase();
```javascript
        var sampleString = "thisIsASampleString";
        var str = Str.toSnakeCaseFromCamelCase(sampleString);
        console.log(str); //Outputs: this_is_a_sample_string
```
#### Str.toOrdinal();
```javascript
        //accept number and string type number ex. 19 = number, '19' = string
        var alphaNum = 42; or var alphaNum = '42';
        var str = Str.toOrdinal(alphaNum);
        console.log(str); //Outputs: 42nd
```
#### Str.startsWith();
```javascript
        //returns true
        if (Str.startsWith('sample', 's')) {
            //Do something awesome here..
        }
```
#### Str.endsWith();
```javascript
        //returns true
        if (Str.endsWith('sample', 'e')) {
            //Do something awesome here..
        }
```
#### Str.contains();
```javascript
        //returns true
        if (Str.contains('this is a sample string', 'sample')) {
            //Do something awesome here..
        }
```

## Filter
We all know that AngularJs provides built-in filters, but I think these filters below are not included;
#### toSlug
```html
<!--Controller: $scope.title = "This is a sample string"-->
<p>Title:{{title | toSlug}}</p> <!-- Browser: this-is-a-sample-string -->
```

#### toCamelCase
```html
<!--Controller: $scope.title = "This is a sample string"-->
<p>Title:{{title | toCamelCase}}</p> <!-- Browser: thisIsASampleString -->
```

#### toSnakeCase
```html
<!--Controller: $scope.title = "This is a sample string"-->
<p>Title:{{title | toSnakeCase}}</p> <!-- Browser: this_is_a_sample_string -->
```

#### toUpperFirstChar
```html
<!--Controller: $scope.title = "uppercase"-->
<p>Title:{{title | toUpperFirstChar}}</p> <!-- Browser: Uppercase -->
```

#### toLowerFirstChar
```html
<!--Controller: $scope.title = "Lowercase"-->
<p>Title:{{title | toLowerFirstChar}}</p> <!-- lowercase -->
```

#### toCamelCaseFromDashed
```html
<!--Controller: $scope.title = "this-is-a-sample-string"-->
<p>Title:{{title | toCamelCaseFromDashed}}</p> <!-- Browser: thisIsASampleString -->
```

#### toDashFromCamelCase
```html
<!--Controller: $scope.title = "thisIsASampleString"-->
<p>Slug:{{title | toDashFromCamelCase}}</p> <!-- Browser: this-is-a-sample-string -->
```

#### toSnakeCaseFromCamelCase
```html
<!--Controller: $scope.title = "thisIsASampleStringg"-->
<p>Title:{{title | toSnakeCaseFromCamelCase}}</p> <!-- Browser: this_is_a_sample_string -->
```
#### toOrdinal
```html
<!--Controller: $scope.ordinalVal = "42"-->
<p>Title:{{ordinalVal | toOrdinal}}</p> <!-- Browser: 42nd -->
```



#### Thanks and enjoy. Godspeed!
