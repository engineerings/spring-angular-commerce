package com.mike.ecommerce;




import org.junit.Test;

import static junit.framework.Assert.assertEquals;
import static org.junit.Assert.assertEquals;

import com.mike.ecommerce.controller.HomeController;

public class AppTest {

    @Test
    public void testApp() {
        HomeController hc = new HomeController();
        String result = hc.home();
        assertEquals( result, "hello from homeController" );
    }
}
