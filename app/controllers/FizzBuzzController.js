'use strict';

angular.module('TestDemoApp').controller('FizzBuzzController', function() {
    var vm = this;

    vm.fizzBuzz = function(num) {

        var result = '';
        for (var i = 1; i <= num; i++) {

            if (i % 3 == 0 && i % 5 == 0) {
                result = result + 'FizzBuzz';
            }
            else if (i % 3 == 0) {
                result = result + 'Fizz';
            }

            else if (i % 5 == 0) {
                result = result + 'Buzz';
            } 

            else {
                result = result + i;
            }
        }
        return result;
    };

});

