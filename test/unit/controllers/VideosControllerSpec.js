'use strict';

describe('VideosController', function() {
    var controller;

    beforeEach(function() {
        module('TestDemoApp');
    });

    beforeEach(inject(function($rootScope, $controller) {
        controller = $controller('VideosController');
    }));

    // it("should set VideosController.videos on instantiation", inject(function($httpBackend) {
    //     $httpBackend.expectGET('https://api.vimeo.com/groups/275943/videos?page=1&per_page=50').respond([{}]);
    //
    //     $httpBackend.flush();
    //
    //     expect(controller.videos).toBeDefined();
    // }));
});
