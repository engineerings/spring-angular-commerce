(function () {
    'use strict';

    var app = angular
        .module('productResourceMock',
                ['ngMockE2E']);

    app.run(function ($httpBackend) {
        var products = [
            {

                'productId': 1,
                'name': 'Peaceful Warrior',
                'description': 'Dan Millman is a university studen locally famous gymnast who ...',
                'price': 12.6,
                'date': 1472042610702,
                'category': 1,
                'weight': 0.5,
                'image': 'peaceful_warrior.jpg',
                'productIdentity': 'peaceful-warrior',
                'metaTitle': 'Peaceful Warrior (2006)',
                'metaDescription': 'Peaceful Warrior is a 2006 by Victor Salva and ' +
                            'written by Kevin Bernhardt by Dan Millman.'

            },
            {

                'productId': 2,
                'name': 'Peaceful',
                'description': 'Dan Millman is a university student famous gymnast who ...',
                'price': 12.6,
                'date': 1472042610702,
                'category': 1,
                'weight': 0.5,
                'image': 'peaceful_warrior.jpg',
                'productIdentity': 'peaceful-warrior',
                'metaTitle': 'Peaceful Warrior (2006)',
                'metaDescription': 'Peaceful Warrior is a 2006 drama film ' +
                '                   directed by Victor Salva and written by ...'

            },
            {

                'productId': 3,
                'name': 'Warrior',
                'description': 'Dan Millman is a university student as famous gymnast ..',
                'price': 12.6,
                'date': 1472042610702,
                'category': 1,
                'weight': 0.5,
                'image': 'peaceful_warrior.jpg',
                'productIdentity': 'peaceful-warrior',
                'metaTitle': 'Peaceful Warrior (2006)',
                'metaDescription': 'Peaceful Warrior is a 2006 drama ' +
                                'film directed by Victor Salva and ...'

            }
        ];

        var productUrl = '/api/v1/products';

        $httpBackend.whenGET(productUrl).respond(products);

        var editingRegex = new RegExp(productUrl + '/[0-9][0-9]*', '');
        $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {

            var product = {'productId': 0};
            var parameters = url.split('/');
            var length = parameters.length;
            var productId = parameters[length - 1];

            if (productId > 0) {
                for (var i = 0; i < products.length; i ++) {
                    if (products[i].productId == productId) {
                        product = products[i];
                        break;
                    }
                }
            }
            return [200, product, {}];
        });

        $httpBackend.whenPOST(productUrl).respond(function (method, url, data) {
            var product = angular.fromJson(data);

            if (!product.productId) {

                // create new product productId
                product.productId = products[products.length - 1].productId + 1;
                products.push(product);
            } else {
                // update product
                for (var i = 0; i < products.length; i++) {
                    if (products[i].productId == product.productId) {

                        products[i] = product;
                        break;
                    }
                }
            }
            return [200, product, {}];
        });

        $httpBackend.whenGET(/app/).passThrough();

        $httpBackend.whenGET(/common/).passThrough();

        $httpBackend.whenGET(/^\/assets\//).passThrough();

    });

}());
