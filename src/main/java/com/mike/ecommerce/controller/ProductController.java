package com.mike.ecommerce.controller;


import com.mike.ecommerce.model.Product;
import com.mike.ecommerce.repository.ProductJpaRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/")
public class ProductController {

    @Autowired
    ProductJpaRepository productJpaRepository;

    @RequestMapping(value = "products", method = RequestMethod.GET)
    public List<Product> list() {

        return productJpaRepository.findAll();
    }

    @RequestMapping(value = "products", method = RequestMethod.POST)
    public Product create(@RequestBody Product product) {
        return productJpaRepository.saveAndFlush(product);
    }

    @RequestMapping(value = "products/{productId}", method = RequestMethod.GET)
    public Product get(@PathVariable Long productId) {

        return productJpaRepository.findOne(productId);
    }

    @RequestMapping(value = "products/{productId}", method = RequestMethod.PUT)
    public Product update(@PathVariable Long productId, @RequestBody Product product) {

        Product existingProduct = productJpaRepository.findOne(productId);
        BeanUtils.copyProperties(product, existingProduct);
        return productJpaRepository.saveAndFlush(existingProduct);
    }

    @RequestMapping(value = "products/{productId}", method = RequestMethod.DELETE)
    public Product delete(@PathVariable Long productId) {

        Product existingProduct = productJpaRepository.findOne(productId);
        productJpaRepository.delete(existingProduct);
        return existingProduct;
    }


}
