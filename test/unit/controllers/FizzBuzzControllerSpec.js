'use strict';

describe("FizzBuzzController", function() {
    var controller;

    beforeEach(function() {
        module('TestDemoApp');
    });

    beforeEach(inject(function($rootScope, $controller) {
        controller = $controller('FizzBuzzController');
    }));

    describe("FizzBuzzController.fizzBuzz", function() {

        // it("should have the correct string for 15 integers", function() {
        //
        //     controller.fizzBuzz(15);
        //
        //     expect(controller.fizzBuzzOutput).toEqual('12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz');
        // });
        //
        // it("should have the correct string for 30 integers", function() {
        //
        //     controller.fizzBuzz(30);
        //
        //     expect(controller.fizzBuzzOutput).toEqual('12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz1617Fizz19BuzzFizz2223FizzBuzz26Fizz2829FizzBuzz');
        // });
    });
});
