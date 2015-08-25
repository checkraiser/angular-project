`/** @jsx React.DOM */`

angular.module("exampleApp").directive "reactTest",  ->
  (scope, element, attrs) ->
    Hello = React.createClass
      render: ->
        `<div>Hello World</div>`
    React.render `<Hello />`, element[0]
