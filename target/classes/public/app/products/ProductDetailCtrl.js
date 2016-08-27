(function () {

    'use strict';

    angular
        .module('productManagement')
        .controller('ProductDetailCtrl',
            ['product',
                ProductDetailCtrl]);

    function ProductDetailCtrl(product) {
        var vm = this;

        vm.imgFolder = '/assets/img/';

        vm.product = product;

        vm.title = 'Product Detail: ' + vm.product.name;

    }

}());

