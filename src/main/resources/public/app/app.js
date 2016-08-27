(function () {

    'use strict';

    var app = angular.module('commerceApp',
            ['ui.router',
             'common.services',
             'productManagement'
             /*'productResourceMock'*/]);

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

                })
                .state('productCreate', {
                    url: '/products/create',
                    templateUrl: 'app/products/productCreateView.html',
                    controller: 'ProductCreateCtrl as vm'
                })
                .state('productEdit', {
                    url: '/products/edit/:productId',
                    templateUrl: 'app/products/productEditView.html',
                    controller: 'productEditCtrl as vm',
                    resolve: {
                        productResource: 'productResource',

                        product: function (productResource, $stateParams) {
                            var productId = $stateParams.productId;
                            return productResource.get({id: productId}).$promise;
                        }
                    }
                })
                .state('productDetail', {
                    url: '/products/:productId',
                    templateUrl: 'app/products/productDetailView.html',
                    controller: 'ProductDetailCtrl as vm',
                    resolve: {
                        productResource: 'productResource',

                        product: function (productResource, $stateParams) {
                            var productId = $stateParams.productId;
                            return productResource.get({id: productId}).$promise;
                        }
                    }
                });

        }]

    );

}());
