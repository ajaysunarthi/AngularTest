'use strict';

describe('TextSearchController', function() {
    var controller;

    beforeEach(function() {
        module('TestDemoApp');
    });

    beforeEach(inject(function($rootScope, $controller) {
        controller = $controller('TextSearchController');
    }));

    // it("should find 2 occurrences of 'uh' in the article", function() {
    //     controller.search = 'uh';
    //
    //     controller.textChange();
    //
    //     expect(controller.occurrences).toEqual(2);
    // });
    //
    //it("should find 17 occurrences of 'the' in the article", function() {
    //     controller.search = 'the';
    //
    //     controller.textChange();
    //
    //     expect(controller.occurrences).toEqual(17);
    //});
    //
    // it("should find 6 occurrences of 'constituent' in the article", function() {
    //     controller.search = 'constituent';
    //
    //     controller.textChange();
    //
    //     expect(controller.occurrences == 6);
    // });
});
