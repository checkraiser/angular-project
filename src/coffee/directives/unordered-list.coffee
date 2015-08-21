angular.module("exampleApp").directive "unorderedList",  ->
  (scope, element, attrs) ->
    data = scope[attrs["unorderedList"]]
    if angular.isArray data
      listElem = angular.element "<ul>"
      element.append listElem
      for item in data
        listElem.append angular.element('<li>').text(item.name)

