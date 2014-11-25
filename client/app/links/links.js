angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.links = {};
  $scope.data = [];
  $scope.getLinks = Links.getLinks;
  $scope.getLinks();
  $scope.data.links = Links.getLinks();
});
