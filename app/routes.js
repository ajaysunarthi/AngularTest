'use strict';

angular.module('TestDemoApp').config(['$routeProvider', function($routeProvider) {

    $routeProvider
    .when('/', {
        templateUrl: 'app/views/index.html'
    })
    .when('/videos', {
        templateUrl: 'app/views/videos/index.html',
        controller: 'VideosController',
        controllerAs: 'vid'
    })
    .when('/text-search', {
        templateUrl: 'app/views/text-search/index.html',
        controller: 'TextSearchController',
        controllerAs: 'txt'
    })
    .when('/fizzbuzz', {
        templateUrl: 'app/views/fizz-buzz/index.html',
        controller: 'FizzBuzzController',
        controllerAs: 'fizz'
    })
    .otherwise({redirectTo: '/'});

}]);
