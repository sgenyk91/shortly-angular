angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
    $scope.link = {};
    $scope.data = [];
    $scope.addLink = function() {
      Links.addLink();
    };
});
