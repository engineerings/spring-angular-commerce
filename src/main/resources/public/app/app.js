(function () {

    'use strict';

    var app = angular.module('commerceApp',
            ['ui.router',
             'productManagement',
            'productResourceMock']);

    app.config(function ($provide) {
        $provide.decorator('$exceptionHandler',
            ['$delegate',
                function ($delegate) {
                    return function (exception, cause) {
                        exception.message = 'Please contact over support! \n Message: ' +
                            exception.message;
                        $delegate(exception, cause);
                        alert(exception.message);
                    };
                }]);
    });

    app.config(['$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'app/welcomeView.html'
                })
                // Products
                .state('productList', {

                    url: '/products',
                    templateUrl: 'app/products/productListView.html',
                    controller: 'ProductListCtrl as vm'

                });

        }]

    );

}());
