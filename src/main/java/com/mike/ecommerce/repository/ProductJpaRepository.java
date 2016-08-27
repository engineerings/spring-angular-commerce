package com.mike.ecommerce.repository;


import com.mike.ecommerce.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
public interface ProductJpaRepository extends JpaRepository<Product, Long> {

}
