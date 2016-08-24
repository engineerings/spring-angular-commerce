package com.mike.ecommerce.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v2/")
public class HomeController {

    @RequestMapping("/")
    public String home() {
        return "hello from homeController";
    }

}
