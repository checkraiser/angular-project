ctrl = (
  $scope
) ->
  $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle']

angular.module("exampleApp").controller "HomeListCtrl", [
  "$scope", ctrl
]
