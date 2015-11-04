(function () {
	"use strict";

	var mod = angular.module("rex-string-helper", []);
        mod.factory('Str', function () {

            function _toSlug(str) {
                return str
                    .toLowerCase()
                    .replace(/ /g,'-')
                    .replace(/[^\w-]+/g,'');
            }

            function _toCamelCase (str) {
                return str
                    .replace(/\s(.)/g, function($1) {
                        return $1.toUpperCase();
                    })
                    .replace(/^(.)/, function($1) {
                        return $1.toLowerCase();
                    })
                    .replace(/\s/g, '');
            }

            function _toSnakeCase (str) {
                return str
                    .toLowerCase()
                    .replace(/ /g,'_')
                    .replace(/[^\w-]+/g,'');
            }

            function _toUpperCaseFirstChar (str) {
                return str.substr( 0, 1 ).toUpperCase() + str.substr( 1 );
            }

            function _toLowerCaseFirstChar (str) {
                return str.substr( 0, 1 ).toLowerCase() + str.substr( 1 );
            }

            function _toCamelCaseFromDashed (str) {
                return str.toLowerCase().replace(/-(.)/g, function(match, group) {
                    return group.toUpperCase();
                });
            }

            function _toDashFromCamelCase (str){
                return str.replace(/([A-Z])/g, function($1){return "-"+$1.toLowerCase();});
            }

            function _toSnakeCaseFromCamelCase (str){
                return str.replace(/([A-Z])/g, function($1){return "_"+$1.toLowerCase();});
            }

            function _toOrdinalValue (number){

                if(isNaN(number) || number < 1) {
                    return number;
                } else {
                    var lastDigit = number % 10;

                    if(lastDigit === 1) {
                        return number + 'st'
                    } else if(lastDigit === 2) {
                        return number + 'nd'
                    } else if (lastDigit === 3) {
                        return number + 'rd'
                    } else if (lastDigit > 3) {
                        return number + 'th'
                    }
                }
            }

            return {
                toSlug : _toSlug,
                toCamelCase : _toCamelCase,
                toSnakeCase : _toSnakeCase,
                toUpperFirstChar : _toUpperCaseFirstChar,
                toLowerFirstChar : _toLowerCaseFirstChar,
                toCamelCaseFromDashed : _toCamelCaseFromDashed,
                toDashFromCamelCase : _toDashFromCamelCase,
                toSnakeCaseFromCamelCase : _toSnakeCaseFromCamelCase,
                toOrdinal : _toOrdinalValue
            };
        });

        /*Filters*/
        mod.filter("toSlug", ["Str", function(Str) {
            return function(input) {
                return Str.toSlug(input);
            }
        }]);

        mod.filter("toCamelCase", ["Str", function(Str) {
            return function(input) {
                return Str.toCamelCase(input);
            }
        }]);

        mod.filter("toSnakeCase", ["Str", function(Str) {
            return function(input) {
                return Str.toSnakeCase(input);
            }
        }]);

        mod.filter("toUpperFirstChar", ["Str", function(Str) {
            return function(input) {
                return Str.toUpperFirstChar(input);
            }
        }]);

        mod.filter("toLowerFirstChar", ["Str", function(Str) {
            return function(input) {
                return Str.toLowerFirstChar(input);
            }
        }]);

        mod.filter("toOrdinal", ["Str", function(Str) {
            return function(number) {
                return Str.toOrdinal(number);
            }
        }]);

})();