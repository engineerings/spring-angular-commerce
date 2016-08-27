(function () {

    'use strict';

    angular
        .module('productManagement')
        .controller('ProductCreateCtrl',
            ['productResource',
             '$state',
              '$stateParams',
                ProductCreateCtrl]);

    function ProductCreateCtrl($state, $stateParams, productResource) {
        var vm = this;

        vm.product = productResource;

        vm.addProduct = function () {
            vm.productResource.$save(function () {
                $state.go('productList');
            })
        };

    }

}());