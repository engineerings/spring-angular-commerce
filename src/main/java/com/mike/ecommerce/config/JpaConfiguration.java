package com.mike.ecommerce.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories(basePackages={"com.mike.ecommerce.repository"})
public class JpaConfiguration {
}
