(function () {

    "use strict";

    angular
        .module('productManagement')
        .controller('productDetailCtrl',
                 ['product',
                   ProductDetailCtrl]);


    function ProductDetailCtrl(product) {
        var vm = this;

        vm.product = product;

        console.log("------------------------------------------------------");
        console.log(product);

        vm.title = "Product Detail: " + vm.product.name;
    }

}());


