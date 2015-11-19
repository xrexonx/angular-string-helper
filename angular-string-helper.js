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

        function _toOrdinalValue (number) {

            if (isNaN(number) || number < 1) {
                return number;
            } else {
                var lastDigit = number % 10;

                if (number === 11 || number === 12 || number === 13) {
                    return number + 'th';
                }

                if (lastDigit === 1) {
                    return number + 'st';
                } else if (lastDigit === 2) {
                    return number + 'nd';
                } else if (lastDigit === 3) {
                    return number + 'rd';
                } else if (lastDigit > 3) {
                    return number + 'th';
                }

            }
        }

        function _startsWith (str, firstChar) {
            return str.charAt(0) === firstChar;
        }

        function _endsWith (str, lastChar) {
            return str.slice(-1) === lastChar;
        }

        function _contains (str, findStr) {
            return str.indexOf(findStr) >= 0;
        }

        function _truncate (str, len) {
            return str.substring(0,len)+'...';
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
            toOrdinal : _toOrdinalValue,
            startsWith : _startsWith,
            endsWith : _endsWith,
            contains : _contains,
            truncate : _truncate
        };
    })

        /*Filters*/
        .filter("toSlug", ["Str", function(Str) {
            return function(input) {
                return Str.toSlug(input);
            }
        }])

        .filter("toCamelCase", ["Str", function(Str) {
            return function(input) {
                return Str.toCamelCase(input);
            }
        }])

        .filter("toSnakeCase", ["Str", function(Str) {
            return function(input) {
                return Str.toSnakeCase(input);
            }
        }])

        .filter("toUpperFirstChar", ["Str", function(Str) {
            return function(input) {
                return Str.toUpperFirstChar(input);
            }
        }])

        .filter("toLowerFirstChar", ["Str", function(Str) {
            return function(input) {
                return Str.toLowerFirstChar(input);
            }
        }])

        .filter("toOrdinal", ["Str", function(Str) {
            return function(number) {
                return Str.toOrdinal(number);
            }
        }]);

})();