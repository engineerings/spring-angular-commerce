package com.mike.ecommerce.controller;


import com.mike.ecommerce.model.Product;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/")
public class ProductController {

    @RequestMapping(value = "products", method = RequestMethod.GET)
    public List<Product> list() {
        return ProductStub.list();
    }

    @RequestMapping(value = "products", method = RequestMethod.POST)
    public Product create(@RequestBody Product product) {
        return ProductStub.create(product);
    }

    @RequestMapping(value = "products/{productId}", method = RequestMethod.GET)
    public Product get(@PathVariable Long productId) {
        return ProductStub.get(productId);
    }

    @RequestMapping(value = "products/{productId}", method = RequestMethod.PUT)
    public Product update(@PathVariable Long productId, @RequestBody Product product) {
        return ProductStub.update(productId, product);
    }

    @RequestMapping(value = "products/{productId}", method = RequestMethod.DELETE)
    public Product delete(@PathVariable Long productId) {
        return ProductStub.delete(productId);
    }


}
