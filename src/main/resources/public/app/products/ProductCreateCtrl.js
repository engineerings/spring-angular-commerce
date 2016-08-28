(function () {

    'use strict';

    angular
        .module('productManagement')
        .controller('ProductCreateCtrl',
            ['productResource',
             '$state',
             '$scope',
             ProductCreateCtrl]);

    function ProductCreateCtrl(productResource, $state, $scope) {
        var vm = this;

        vm.product = new productResource();

        $scope.addProduct = function () {
            vm.product.$save(function () {
                $state.go('productList');
            })
        };

    }

}());