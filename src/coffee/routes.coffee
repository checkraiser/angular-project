angular.module("exampleApp").config ["$stateProvider", "$urlRouterProvider", ($stateProvider, $urlRouterProvider) ->
  $urlRouterProvider.otherwise '/home'
  $stateProvider
    .state 'home',
      url: '/home'
      templateUrl: 'templates/home.html'

    .state 'home.list',
      url: '/list'
      templateUrl: 'templates/home-list.html'
      controller: 'HomeListCtrl'

    .state 'home.paragraph',
      url: '/paragraph'
      template: 'I could sure use a drink right now'

    .state 'about',
      url: '/about'
      views:
        '':
          templateUrl: 'templates/about.html'
        'columnOne@about':
          template: 'Column 1'
        'columnTwo@about':
          template: 'Column 2'

]

