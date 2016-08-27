
(function () {

    'use strict';

    angular
        .module('productManagement')
        .controller('productEditCtrl',
            ['product',
                '$state',
                '$filter',
                'productResource',
                productEditCtrl]);

    function productEditCtrl(product, $state, $filter, productResource) {
        var vm = this;

        vm.product = product;

        vm.product.date = $filter('date')(vm.product.date, "dd/MM/yyyy");


        console.log(vm.product);


        vm.updateProduct = function (productResource) {
            vm.productResource.$update(function () {
                $state.go('productList');
            })
        };

    }

}());