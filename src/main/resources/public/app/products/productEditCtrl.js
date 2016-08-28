
(function () {

    'use strict';

    angular
        .module('productManagement')
        .controller('productEditCtrl',
            ['product',
                '$state',
                '$filter',
                '$scope',
                'productResource',
                productEditCtrl]);

    function productEditCtrl(product, $state, $filter, $scope) {
        var vm = this;

        vm.product = product;

        vm.product.date = $filter('date')(vm.product.date, "dd/MM/yyyy");

        $scope.updateProduct = function () {
            vm.product.$save(function () {
                $state.go('productList');
            });
        };

    }

}());