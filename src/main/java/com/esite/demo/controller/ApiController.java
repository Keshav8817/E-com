package com.esite.demo.controller;

import com.esite.demo.Repo.Userrepo;
import com.esite.demo.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
public class ApiController {
    @Autowired
    private Userrepo userrepo ;

    @GetMapping(value = "/")
    public String getPage() {
        return "Welcome";
    }

    @GetMapping(value = "/users")
    public ResponseEntity<List<User>> getUsers() {
        return new ResponseEntity<List<User>>(userrepo.findAll(), HttpStatus.OK);
    }
    @GetMapping(value = "/user/{id}")
    public ResponseEntity<User> getUser(@PathVariable long id) {
        return new ResponseEntity<User>(userrepo.findById(id).get(), HttpStatus.OK);
    }
}
