package com.mike.ecommerce.controller;


import com.mike.ecommerce.model.Product;

import java.util.Map;
import java.util.HashMap;
import java.util.Date;
import java.util.List;
import java.util.ArrayList;

public class ProductStub {

    private static Map<Long, Product> products = new HashMap<Long, Product>() ;
    private static Long idIndex = 3L;
    private static Date date = new Date();

    // populate initial products
    static {
        Product a = new Product(1L, "Peaceful Warrior",
                "Dan Millman is a university student as well as a locally famous gymnast who dreams of winning a National Championship competition...",
                12.6, date, 1, 0.5,
                "peaceful_warrior.jpg",
                "peaceful-warrior",
                "Peaceful Warrior (2006)",
                "Peaceful Warrior is a 2006 drama film directed by Victor Salva and written by Kevin Bernhardt based on the novel Way of the Peaceful Warrior by Dan Millman."
                );
        products.put(1L, a);
        Product b = new Product(2L, "Peaceful",
                "Dan Millman is a university student as well as a locally famous gymnast who dreams of winning a National Championship competition...",
                12.6, date, 1, 0.5,
                "peaceful_warrior.jpg",
                "peaceful-warrior",
                "Peaceful Warrior (2006)",
                "Peaceful Warrior is a 2006 drama film directed by Victor Salva and written by Kevin Bernhardt based on the novel Way of the Peaceful Warrior by Dan Millman."
        );
        products.put(2L, b);
        Product c = new Product(3L, "Warrior",
                "Dan Millman is a university student as well as a locally famous gymnast who dreams of winning a National Championship competition...",
                12.6, date, 1, 0.5,
                "peaceful_warrior.jpg",
                "peaceful-warrior",
                "Peaceful Warrior (2006)",
                "Peaceful Warrior is a 2006 drama film directed by Victor Salva and written by Kevin Bernhardt based on the novel Way of the Peaceful Warrior by Dan Millman."
        );
        products.put(3L, c);
    }

    public static List<Product> list() {
        return new ArrayList<Product>(products.values());
    }

    public static Product create(Product product) {
        idIndex += idIndex;
        product.setId(idIndex);
        products.put(idIndex, product);
        return product;
    }

    public static Product get(Long id) { return products.get(id);}

    public static Product update(Long id, Product product) {
        products.put(id, product);
        return product;
    }

    public static Product delete(Long id) { return products.remove(id); }

}
