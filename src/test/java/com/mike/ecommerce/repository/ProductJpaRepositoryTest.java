package com.mike.ecommerce.repository;

import com.mike.ecommerce.App;
import com.mike.ecommerce.model.Product;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Date;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotSame;
import static org.junit.Assert.assertNotNull;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;



@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = App.class)
public class ProductJpaRepositoryTest {

    @Autowired
    private ProductJpaRepository productJpaRepository;

    @PersistenceContext
    private EntityManager entityManager;

    @Test
    public void testJpaFindAll() throws Exception {
        List<Product> products = productJpaRepository.findAll();
        assertThat(products.size(), is(greaterThanOrEqualTo(0)));
    }

    @Test
    @Transactional
    public void testSaveAndGetAndDelete() throws Exception {
        Product product = new Product();
        product.setProductId(4L);
        product.setDescription("Test Description");
        product.setPrice(19.99);
        product.setDate(new Date());
        product.setCategory(1);
        product.setWeight(0.25);
        product.setImage("img.jpg");
        product.setIdentity("peaceful-warrior-2");
        product.setMetaTitle("Peaceful Warrior (2006)");
        product.setMetaDescription("Peaceful Warrior (2006)...");

        product = productJpaRepository.saveAndFlush(product);

        entityManager.clear();

        Product otherProduct = productJpaRepository.findOne(product.getProductId());
        assertEquals("peaceful-warrior-2", otherProduct.getIdentity());
        assertEquals("Test Description", otherProduct.getDescription());

        // delete product
        productJpaRepository.delete(otherProduct);

    }


}






















