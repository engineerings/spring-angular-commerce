(function () {

'use strict';

angular.
    module('productManagement')
    .controller('ProductListCtrl',
                ['productResource',
                    ProductListCtrl]);

function ProductListCtrl(productResource) {
    var vm = this;

    vm.imgFolder = '/assets/img/';

    productResource.query(function (data) {
        vm.products = data;

        console.log(vm.products);
    });



    vm.showImage = false;

    vm.toggleImage = function () {
        vm.showImage = !vm.showImage;
    }

}

}());
