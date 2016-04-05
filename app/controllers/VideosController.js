'use strict';

angular.module('TestDemoApp').controller('VideosController', ['$http', 'USER_TOKEN', function($http, USER_TOKEN) {
var vm =this;
    $http.defaults.headers.common.Authorization = 'bearer ' + USER_TOKEN;

    $http.get('https://api.vimeo.com/groups/275943/videos?page=1&per_page=50')
    .then(function(response) {
         vm.videos = response.data;
    });

}]);
