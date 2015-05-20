(function () {
    var app = angular.module('Lab', [
        'ui.router',
        'ui.bootstrap-slider',
        'angular-flot',
        'mathTag'
    ]);

    app.config(function($stateProvider, $urlRouterProvider) {
        var viewBase = '/js/views/';

        // For any unmatched url, redirect to /welcome
        $urlRouterProvider.otherwise("main");

        $stateProvider
            .state('main', {
                url: "/main",
                views: {
                    "main": { templateUrl: viewBase + 'main.html'}
                }
            });
    });

    app.run(function ($rootScope) {
        console.log('All module loaded, run start');
    });

}());